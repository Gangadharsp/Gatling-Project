import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class Heroukapp extends Simulation {
  val httpProtocol = http
    .baseUrl("https://thinking-tester-contact-list.herokuapp.com")

  var accessToken = "" // Declare accessToken as a global variable
  val userlogincred = csv(fileName = "data/logincredentials.csv").circular
  val contactcreatecred = csv(fileName = "data/contactcreation.csv").circular

  val loginScenario = scenario("Login")
    .feed(userlogincred)
    .exec(http("Login")
      .post("/users/login")
      .headers(Map("Content-Type" -> "application/json"))
      .body(StringBody("""{"email":"${email}","password":"${password}"}"""))
      .check(status.is(200)).check(responseTimeInMillis.lt(5000)).check(bodyBytes.transform(_.length).lte(10000))
      .check(headerRegex("Set-Cookie", """(?<=token=)[^;]+""").find.exists.saveAs("accessToken"))
    ).pause(2)

  val createScenario = scenario("Create Contact")
    .exec { session =>
      val accessToken = session("accessToken").as[String]
      println("Token>>>>>>>>>>:" + accessToken)
      session
    }
    .repeat(1) {
      feed(contactcreatecred)
        .exec(http("Create Contact")
          .post("/contacts")
          .headers(Map("Content-Type" -> "application/json", "Authorization" -> s"Bearer $accessToken"))
          .body(StringBody(
            """{"firstName":"${firstName}","lastName":"${lastName}","birthdate":"${birthdate}",
              |"email":"${email}","phone":"${phone}","street1":"${street1}","street2":"${street2}",
              |"city":"${city}","postalCode":"${postalCode}"}""".stripMargin))
          .check(status.is(201)).check(responseTimeInMillis.lt(5000)).check(bodyBytes.transform(_.length).lte(10000))
        ).pause(2)
    }

  val updateScenario = scenario("Update Contact")
    .feed(contactcreatecred)
    .exec(http("Get Contacts for update")
      .get("/contacts")
      .headers(Map("Authorization" -> "Bearer ${JWTToken}"))
      .check(jsonPath("$[*]._id").findAll.saveAs("contactIds"))
      .check(status.is(200)).check(responseTimeInMillis.lt(5000)).check(bodyBytes.transform(_.length).lte(10000))

    )
    .foreach("${contactIds}", "contactId") {
      exec(http("Update Contact")
        .put("/contacts/${contactId}")
        .headers(Map("Content-Type" -> "application/json", "Authorization" -> "Bearer ${JWTToken}"))
        .body(StringBody("""{"firstName":"${firstnameupdate}","lastName":"${lastnameupdated}"}"""))

      ).pause(2)
    }

  val deleteScenario = scenario("Delete Contacts")
    .exec(http("Get Contacts for delete")
      .get("/contacts")
      .headers(Map("Authorization" -> "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI2MmNjZGY4YWQzNTAwMTMxOWExMDgiLCJpYXQiOjE3MTUzMTk1NDV9.apXY9BdrrCVyUQoqhZo26UVMMCWPLdo0r_c_FQmcdOY"))
      .check(jsonPath("$[*]._id").findAll.saveAs("contactIds"))
    )
    .foreach("${contactIds}", "contactId") {
      exec(http("Delete Contact")
        .delete("/contacts/${contactId}")
        .headers(Map("Authorization" -> "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI2MmNjZGY4YWQzNTAwMTMxOWExMDgiLCJpYXQiOjE3MTUzMTk1NDV9.apXY9BdrrCVyUQoqhZo26UVMMCWPLdo0r_c_FQmcdOY"))
      )
    }

//  val scn = scenario("Main Scenario")
//    .exec(loginScenario)
//    .exec(createScenario)
////    .exec(updateScenario)
////    .exec(deleteScenario)

  setUp(
    loginScenario.inject(atOnceUsers(1)),
    createScenario.inject(atOnceUsers(1)),
//    deleteScenario.inject(rampUsers(1).during(1))
  ).protocols(httpProtocol)
}

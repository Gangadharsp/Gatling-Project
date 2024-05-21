var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "101",
        "ok": "101",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "255",
        "ok": "255",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1039",
        "ok": "1039",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "282",
        "ok": "282",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "108",
        "ok": "108",
        "ko": "-"
    },
    "percentiles1": {
        "total": "263",
        "ok": "263",
        "ko": "-"
    },
    "percentiles2": {
        "total": "265",
        "ok": "265",
        "ko": "-"
    },
    "percentiles3": {
        "total": "303",
        "ok": "303",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1033",
        "ok": "1033",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 99,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.441",
        "ok": "0.441",
        "ko": "-"
    }
},
contents: {
"req_create-contact-eec93": {
        type: "REQUEST",
        name: "Create Contact",
path: "Create Contact",
pathFormatted: "req_create-contact-eec93",
stats: {
    "name": "Create Contact",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "255",
        "ok": "255",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1033",
        "ok": "1033",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "274",
        "ok": "274",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "78",
        "ok": "78",
        "ko": "-"
    },
    "percentiles1": {
        "total": "263",
        "ok": "263",
        "ko": "-"
    },
    "percentiles2": {
        "total": "265",
        "ok": "265",
        "ko": "-"
    },
    "percentiles3": {
        "total": "287",
        "ok": "287",
        "ko": "-"
    },
    "percentiles4": {
        "total": "370",
        "ok": "370",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 99,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.437",
        "ok": "0.437",
        "ko": "-"
    }
}
    },"req_login-99dea": {
        type: "REQUEST",
        name: "Login",
path: "Login",
pathFormatted: "req_login-99dea",
stats: {
    "name": "Login",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1039",
        "ok": "1039",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1039",
        "ok": "1039",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1039",
        "ok": "1039",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1039",
        "ok": "1039",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1039",
        "ok": "1039",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1039",
        "ok": "1039",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1039",
        "ok": "1039",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 100
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.004",
        "ok": "0.004",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}

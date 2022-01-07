$.ajax({
    type: "GET",
    url: "data.json",
    dataType: "JSON",

    success: function (response) {
        $(".btn-weekly").on("click", function () {
            $(this).addClass("btn-success");
            $(".btn-monthly").removeClass("btn-success");
            $(".btn-daily").removeClass("btn-success");
            var currentWeeklyWork = response[0].timeframes.weekly.current;
            var currentWeeklyPlay = response[1].timeframes.weekly.current;
            var currentWeeklyStudy = response[2].timeframes.weekly.current;
            var currentWeeklyExercise = response[3].timeframes.weekly.current;
            var currentWeeklySocial = response[4].timeframes.weekly.current;
            var currentWeeklyCare = response[5].timeframes.weekly.current;
            $(".work-hrs").text(currentWeeklyWork);
            $(".play-hrs").text(currentWeeklyPlay);
            $(".study-hrs").text(currentWeeklyStudy);
            $(".exercise-hrs").text(currentWeeklyExercise);
            $(".social-hrs").text(currentWeeklySocial);
            $(".care-hrs").text(currentWeeklyCare);
            var previousWeeklyWork = response[0].timeframes.weekly.previous;
            var previousWeeklyPlay = response[1].timeframes.weekly.previous;
            var previousWeeklyStudy = response[2].timeframes.weekly.previous;
            var previousWeeklyExercise = response[3].timeframes.weekly.previous;
            var previousWeeklySocial = response[4].timeframes.weekly.previous;
            var previousWeeklyCare = response[5].timeframes.weekly.previous;
            $(".p-work").text("Last Week - " + previousWeeklyWork + "hrs");
            $(".play-p").text("Last Week - " + previousWeeklyPlay + "hrs");
            $(".p-study").text("Last Week - " + previousWeeklyStudy + "hrs");
            $(".p-study").text("Last Week - " + previousWeeklyStudy + "hrs");
            $(".p-exercise").text("Last Week - " + previousWeeklyExercise + "hrs");
            $(".p-social").text("Last Week - " + previousWeeklySocial + "hrs");
            $(".p-cares").text("Last Week - " + previousWeeklyCare + "hrs");
        })
        $(".btn-daily").click(function (e) {
            $(this).addClass("btn-success");
            $(".btn-weekly").removeClass("btn-success");
            $(".btn-monthly").removeClass("btn-success");
            var currentDailyWork = response[0].timeframes.daily.current;
            var currentDailyPlay = response[1].timeframes.daily.current;
            var currentDailyStudy = response[2].timeframes.daily.current;
            var currentDailyExercise = response[3].timeframes.daily.current;
            var currentDailySocial = response[4].timeframes.daily.current;
            var currentDailyCare = response[5].timeframes.daily.current;
            $(".work-hrs").text(currentDailyWork);
            $(".play-hrs").text(currentDailyPlay);
            $(".study-hrs").text(currentDailyStudy);
            $(".exercise-hrs").text(currentDailyExercise);
            $(".social-hrs").text(currentDailySocial);
            $(".care-hrs").text(currentDailyCare);
            var previousDailyWork = response[0].timeframes.daily.previous;
            var previousDailyPlay = response[1].timeframes.daily.previous;
            var previousDailyStudy = response[2].timeframes.daily.previous;
            var previousDailyExercise = response[3].timeframes.daily.previous;
            var previousDailySocial = response[4].timeframes.daily.previous;
            var previousDailyCare = response[5].timeframes.daily.previous;
            $(".p-work").text("Last Day - " + previousDailyWork + "hrs");
            $(".play-p").text("Last Day - " + previousDailyPlay + "hrs");
            $(".p-study").text("Last Day - " + previousDailyStudy + "hrs");
            $(".p-study").text("Last Day - " + previousDailyStudy + "hrs");
            $(".p-exercise").text("Last Day - " + previousDailyExercise + "hrs");
            $(".p-social").text("Last Day - " + previousDailySocial + "hrs");
            $(".p-cares").text("Last Day - " + previousDailyCare + "hrs");
        });
        $(".btn-monthly").click(function (e) {
            $(this).addClass("btn-success");
            $(".btn-weekly").removeClass("btn-success");
            $(".btn-daily").removeClass("btn-success");
            var currentMonthlyWork = response[0].timeframes.monthly.current;
            var currentMonthlyPlay = response[1].timeframes.monthly.current;
            var currentMonthlyStudy = response[2].timeframes.monthly.current;
            var currentMonthlyExercise = response[3].timeframes.monthly.current;
            var currentMonthlySocial = response[4].timeframes.monthly.current;
            var currentMonthlyCare = response[5].timeframes.monthly.current;
            $(".work-hrs").text(currentMonthlyWork);
            $(".play-hrs").text(currentMonthlyPlay);
            $(".study-hrs").text(currentMonthlyStudy);
            $(".exercise-hrs").text(currentMonthlyExercise);
            $(".social-hrs").text(currentMonthlySocial);
            $(".care-hrs").text(currentMonthlyCare);
            var previousMonthlyWork = response[0].timeframes.monthly.previous;
            var previousMonthlyPlay = response[1].timeframes.monthly.previous;
            var previousMonthlyStudy = response[2].timeframes.monthly.previous;
            var previousMonthlyExercise = response[3].timeframes.monthly.previous;
            var previousMonthlySocial = response[4].timeframes.monthly.previous;
            var previousMonthlyCare = response[5].timeframes.monthly.previous;
            $(".p-work").text("Last Month - " + previousMonthlyWork + "hrs");
            $(".play-p").text("Last Month - " + previousMonthlyPlay + "hrs");
            $(".p-study").text("Last Month - " + previousMonthlyStudy + "hrs");
            $(".p-study").text("Last Month - " + previousMonthlyStudy + "hrs");
            $(".p-exercise").text("Last Month - " + previousMonthlyExercise + "hrs");
            $(".p-social").text("Last Month - " + previousMonthlySocial + "hrs");
            $(".p-cares").text("Last Month - " + previousMonthlyCare + "hrs");
        });
    }
});

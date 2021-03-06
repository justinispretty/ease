$(function() {

    $.ajax({
                url: 'http://localhost/ease_itp_final/summaryGraph/',
                method: 'get',
                dataType: 'json',
                success: function(data){
                    console.log(data);

                    var properEQ = data.reduce(function(result, current) {
                        result[current.student_id] = result[current.student_id] || [];
                        result[current.student_id].push(current);
                        return result;
                    }, {});
                    console.log(properEQ);
                   
                    var dataLen =Object.keys(properEQ).length;

                    var interpersonal = [];
                    var intrapersonal = [];
                    var adaptability = [];
                    var stress = [];
                    var mood = [];

                    //get the individual eq 
                    var student_eq = [];

                   
                    $.each(properEQ, function(keys, values){

                        student_eq.push({
                            studentId : values[0]['student_id'],
                            interpersonal : values[0]['interpersonal'],
                            intrapersonal : values[0]['intrapersonal'],
                            stress : values[0]['stress'],
                            adaptability : values[0]['adapt'],
                            mood : values[0]['mood'],
                            });
                    });

                    //pushing the individual EQ 
                        $.each(student_eq, function(keys, values){
                            interpersonal.push(values['interpersonal']);
                            intrapersonal.push(values['intrapersonal']);
                            stress.push(values['stress']);
                            adaptability.push(values['adaptability']);
                            mood.push(values['mood']);                          
                        });

                        var interpersonalPerfectCopy = interpersonal.slice();
                        var intrapersonalPerfectCopy = intrapersonal.slice();
                        var stressPerfectCopy = stress.slice();
                        var adaptabilityPerfectCopy = adaptability.slice();
                        var moodPerfectCopy = mood.slice();

getSummaryBarGraph(intrapersonalPerfectCopy,interpersonalPerfectCopy,stressPerfectCopy,adaptabilityPerfectCopy,moodPerfectCopy);

// DOUGNUT
 //get the individual eq by gender
                    var interpersonalByMale = [];
                    var intrapersonalByMale = [];
                    var adaptabilityByMale = [];
                    var stressByMale = [];
                    var moodByMale = [];

                    var interpersonalByFemale = [];
                    var intrapersonalByFemale = [];
                    var adaptabilityByFemale = [];
                    var stressByFemale = [];
                    var moodByFemale = [];

                    var tempEqGender = [];
                    var getEqMale2 = [];
                    var getEqFemale2 = [];

                   
                    $.each(properEQ, function(keys, values){
                     

                        tempEqGender.push({
                            studentId : values[0]['student_id'],
                            gender : values[0]['gender'],
                            interpersonal : values[0]['interpersonal'],
                            intrapersonal : values[0]['intrapersonal'],
                            stress : values[0]['stress'],
                            adaptability : values[0]['adapt'],
                            mood : values[0]['mood'],
                            });
                    });
                    console.log(tempEqGender);
                          //pushing the individual EQ by gender
                        $.each(tempEqGender, function(keys, values){
                            if(values['gender'] == 'm'){
                                interpersonalByMale.push(values['interpersonal']);
                                intrapersonalByMale.push(values['intrapersonal']);
                                stressByMale.push(values['stress']);
                                adaptabilityByMale.push(values['adaptability']);
                                moodByMale.push(values['mood']);
                            }else if(values['gender'] == 'f') {
                                interpersonalByFemale.push(values['interpersonal']);
                                intrapersonalByFemale.push(values['intrapersonal']);
                                stressByFemale.push(values['stress']);
                                adaptabilityByFemale.push(values['adaptability']);
                                moodByFemale.push(values['mood']);
                            }                         
                        });

doughIntra(intrapersonalByMale,intrapersonalByFemale);
doughInter(interpersonalByMale,interpersonalByFemale);
doughStress(stressByMale,stressByFemale);
doughAdapt(adaptabilityByMale,adaptabilityByFemale);
doughMood(moodByMale,moodByFemale);


}//success
});//ajax

});//function

function getSummaryBarGraph(intra,inter,stress,adapt,mood){
    var a = [],sum=0,sum2=0,sum3=0; //INTRA
    for(let i=0;i<intra.length;i++){
        if(intra[i]>=50 && intra[i]<=84){
            sum =sum +1;
        }else if(intra[i]>=85 && intra[i]<=114){
            sum2 =sum2 +1;
        }else if(intra[i]>=115 && intra[i]<=170){
            sum3 =sum3 +1;
        }
    }a.push(sum);a.push(sum2);a.push(sum3);

        var b = [],sum=0,sum2=0,sum3=0; //INTER
    for(let i=0;i<inter.length;i++){
        if(inter[i]>=50 && inter[i]<=84){
            sum =sum +1;
        }else if(inter[i]>=85 && inter[i]<=114){
            sum2 =sum2 +1;
        }else if(inter[i]>=115 && inter[i]<=170){
            sum3 =sum3 +1;
        }
    }b.push(sum);b.push(sum2);b.push(sum3); 

        var c = [],sum=0,sum2=0,sum3=0; //stress
    for(let i=0;i<stress.length;i++){
        if(stress[i]>=50 && stress[i]<=84){
            sum =sum +1;
        }else if(stress[i]>=85 && stress[i]<=114){
            sum2 =sum2 +1;
        }else if(stress[i]>=115 && stress[i]<=170){
            sum3 =sum3 +1;
        }
    }c.push(sum);c.push(sum2);c.push(sum3);

        var d = [],sum=0,sum2=0,sum3=0; //adapt
    for(let i=0;i<adapt.length;i++){
        if(adapt[i]>=50 && adapt[i]<=84){
            sum =sum +1;
        }else if(adapt[i]>=85 && adapt[i]<=114){
            sum2 =sum2 +1;
        }else if(adapt[i]>=115 && adapt[i]<=170){
            sum3 =sum3 +1;
        }
    }d.push(sum);d.push(sum2);d.push(sum3);

        var e = [],sum=0,sum2=0,sum3=0; //mood
    for(let i=0;i<mood.length;i++){
        if(mood[i]>=50 && mood[i]<=84){
            sum =sum +1;
        }else if(mood[i]>=85 && mood[i]<=114){
            sum2 =sum2 +1;
        }else if(mood[i]>=115 && mood[i]<=170){
            sum3 =sum3 +1;
        }
    }e.push(sum);e.push(sum2);e.push(sum3);






var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    max: 180
                }
            }],
            xAxes: [{
            gridLines: {
                offsetGridLines: false
            }
        }]
        }
    }

var allData = { 
      labels:["INTRAPERSONAL","INTERPERSONAL","ADAPTABILITY","STRESS","GENERAL MOOD"],
        datasets: [{
            label: 'LOW',
            data: [a[0],b[0],d[0],c[0],e[0]],
             backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        },
        {
            label: 'AVERAGE',
            data: [a[1],b[1],d[1],c[1],e[1]],
             backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        },
        {
            label: 'HIGH',
            data: [a[2],b[2],d[2],c[2],e[2]],
             backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(255, 99, 132, 0.9)',
                'rgba(255, 99, 132, 0.9)',
                'rgba(255, 99, 132, 0.9)',
                'rgba(255, 99, 132, 0.9)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        }]
    };

var ctx = document.getElementById("summaryChartEq").getContext("2d");
var barChart = new Chart(ctx, {
    type: 'bar',
    data: allData,
    options: options

});

}

function doughIntra(m,f){
var sum = m.reduce(function(a, b) { return a + b; });
var avg = sum / m.length;


var sum2 = f.reduce(function(a, b) { return a + b; });
var avg2 = sum2 / f.length;
console.log(avg2);
var options = {
  animation: {
    animateRotate: false,
    animateScale: true
  }
};

var data = {
    labels: [
        "Male",
        "Female",
    ],
    datasets: [
        {
            data: [avg,avg2],
            backgroundColor: [
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 99, 132, 0.6)",

            ]
        }]
};
var ctx = document.getElementById("intraDoughChart").getContext("2d");
var doughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});

}

function doughInter(m,f){
var sum = m.reduce(function(a, b) { return a + b; });
var avg = sum / m.length;

var sum2 = f.reduce(function(a, b) { return a + b; });
var avg2 = sum2 / f.length;

var options = {
  animation: {
    animateRotate: false,
    animateScale: true
  }
};

var data = {
    labels: [
        "Male",
        "Female",
    ],
    datasets: [
        {
            data: [avg,avg2],
            backgroundColor: [
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 99, 132, 0.6)",

            ]
        }]
};
var ctx = document.getElementById("interDoughChart").getContext("2d");
var doughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});

}

function doughStress(m,f){
var sum = m.reduce(function(a, b) { return a + b; });
var avg = sum / m.length;

var sum2 = f.reduce(function(a, b) { return a + b; });
var avg2 = sum2 / f.length;

var options = {
  animation: {
    animateRotate: false,
    animateScale: true
  }
};

var data = {
    labels: [
        "Male",
        "Female",
    ],
    datasets: [
        {
            data: [avg,avg2],
            backgroundColor: [
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 99, 132, 0.6)",

            ]
        }]
};
var ctx = document.getElementById("stressDoughChart").getContext("2d");
var doughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});

}

function doughAdapt(m,f){
var sum = m.reduce(function(a, b) { return a + b; });
var avg = sum / m.length;

var sum2 = f.reduce(function(a, b) { return a + b; });
var avg2 = sum2 / f.length;

var options = {
  animation: {
    animateRotate: false,
    animateScale: true
  }
};

var data = {
    labels: [
        "Male",
        "Female",
    ],
    datasets: [
        {
            data: [avg,avg2],
            backgroundColor: [
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 99, 132, 0.6)",

            ]
        }]
};
var ctx = document.getElementById("adaptDoughChart").getContext("2d");
var doughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});

}

function doughMood(m,f){
var sum = m.reduce(function(a, b) { return a + b; });
var avg = sum / m.length;

var sum2 = f.reduce(function(a, b) { return a + b; });
var avg2 = sum2 / f.length;

var options = {
  animation: {
    animateRotate: false,
    animateScale: true
  }
};

var data = {
    labels: [
        "Male",
        "Female",
    ],
    datasets: [
        {
            data: [avg,avg2],
            backgroundColor: [
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 99, 132, 0.6)",

            ]
        }]
};
var ctx = document.getElementById("moodDoughChart").getContext("2d");
var doughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});

}
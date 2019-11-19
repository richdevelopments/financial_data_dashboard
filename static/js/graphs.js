
// var companyFinancialsData = [];

// $.get("https://sandbox.iexapis.com/stable/stock/aapl/financials?token=Tpk_910d9dadad89425cabc488eb529c3800")
//   .done(function(data) {
//     var financialData = {};
//     financialData.label = data.symbol;
//     financialData.financials = data.financials && data.financials[0] ? data.financials[0] : {};

//     companyFinancialsData.push(financialData);
//     console.log(`Updated company financial data`, companyFinancialsData, financialData);
//   });

// queue()
//       .defer(d3.json, "https://sandbox.iexapis.com/stable/stock/market/batch?symbols=aapl,fb,goog,amzn,nflx,&types=cash-flow&token=Tpk_910d9dadad89425cabc488eb529c3800")
//       .await (makeGraphs);


queue()
    .defer(d3.csv, "data/forbes2018.csv")
    .await(makeGraphs);


function makeGraphs(error, forbesData) {
    var ndx = crossfilter(forbesData);

    show_profits(ndx);

    dc.renderAll();

}



function show_profits(ndx) {
    var dim = ndx.dimension(dc.pluck('profits'));
    var group = dim.group();

    dc.barChart("#profits")
        .width(700)
        .height(500)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Company")
        .yAxisLabel("2018 Profits")
        .yAxis().ticks(10);
}





queue()
    .defer(d3.csv, "data/stocks.csv")
    .await(makeGraphs);

function makeGraphs(error, stocksData) {

}

//var spotifyApi = SpotifyWebApi();

//console.log(spotifyApi);


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


// function makeGraphs(error, financialData) {
//     var ndx = crossfilter(financialData);

//     show_net_income(ndx);

//     dc.renderAll();

//     //   console.log(financialData);
// }



// function show_net_income(ndx) {
//     var dim = ndx.dimension(dc.pluck('netIncome'));
//     var group = dim.group();

//     dc.barChart("#net-income")
//         .width(400)
//         .height(300)
//         .margins({top: 10, right: 50, bottom: 30, left: 50})
//         .dimension(dim)
//         .group(group)
//         .transitionDuration(500)
//         .x(d3.scale.ordinal())
//         .xUnits(dc.units.ordinal)
//         .elasticY(true)
//         .xAxisLabel("Company")
//         .yAxis().ticks(20);
// }





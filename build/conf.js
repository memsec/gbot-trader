(function(){var e,s,r,o,n;e=require("fs"),s="production"!==process.env.NODE_ENV&&e.existsSync("./build/conf-dev.js")?require("./conf-dev"):{tokenTelegram:"",myChatId:"",btce:{key:"",secret:""},poloniex:{key:"",secret:""},emailReport:"",emailUser:"",emailPass:"",pairFirst:"nvc",pairTwo:"usd",botLog:!1,botTrade:!0,offModulesAutoSettings:process.env.OFF_MODULES_AUTO_SETTINGS,dangerPriceStop:!0,dynamicSettingsTime:!1,dynamicOffsetOrders:!1,trendDefinition:!1,abruptChangeTrend:!1,bbands:!1,depositLimit:100,offsetOrdersPoints:10,offsetOrdersPercent:0,countOrders:0},r={versionBot:"0.11.11",masterWorker:!0,botLog:process.env.LOG||s.botLog,botTrade:s.botTrade},r.tokenTelegram=process.env.TELEGRAM_TOKEN||s.tokenTelegram,r.myChatId=+process.env.TELEGRAM_ID||s.myChatId,r.exchange=(process.env.EXCHANGE||"btc-e").toLowerCase(),r.host=process.env.BTCE_HOST||"btc-e.nz",r.key=process.env.BTCE_KEY||s.btce.key,r.secret=process.env.BTCE_SECRET||s.btce.secret,r.poloniexKey=process.env.POLONIEX_KEY||s.poloniex.key,r.poloniexSecret=process.env.POLONIEX_SECRET||s.poloniex.secret,r.poloniexFee=process.env.POLONIEX_FEE||.25,r.poloniexMinOrders=1e-4,o=process.env.NAME_COIN||s.pairFirst,n=process.env.NAME_COIN_TWO||s.pairTwo,o="poloniex"===r.exchange?o.toUpperCase():o.toLowerCase(),n="poloniex"===r.exchange?n.toUpperCase():n.toLowerCase(),r.tradeCurrency={name:o,nameTwo:n,pair:[o,n].join("_")},r.timeZone=process.env.TIME_ZONE||"Asia/Yekaterinburg",r.depositLimit=+(process.env.DEPOSIT_LIMIT||s.depositLimit),r.notificationPair=process.env.NOTIFICATION_PAIR||"nmc/usd, ppc/usd, nvc/usd",r.notificationDeviation=+(process.env.NOTIFICATION_DEVIATION_PERCENT||600),r.countOrders=+(process.env.COUNT_ORDERS||s.countOrders),r.timeCloseOrders=+(process.env.TIME_CLOSE_ORDERS||5),r.timeCloseOrdersInactivity=+(process.env.TIME_CLOSE_ORDERS_INACTIVITY||3*r.timeCloseOrders),r.timeCloseOrdersExtra=1,r.offsetOrdersPoints=+(process.env.OFFSET_ORDERS_POINTS||s.offsetOrdersPoints),r.offsetOrdersPercent=+(process.env.OFFSET_ORDERS_PERCENT||s.offsetOrdersPercent),r.timeUpdateAutoSettings=+(process.env.TIME_UPDATE_AUTO_SETTINGS||2),r.restartServerTime=5,r.ecoCountCycle=20,r.multiplierOrdersExtra=3,r.stepBreakevenPercent=+(process.env.STEP_BREAKEVEN_PERCENT||50),r.bbands=!(!+process.env.BBANDS&&!s.bbands),r.bbandsDeviation=+(process.env.BBANDS_DEVIATION||20),r.bbandsInterval=+(process.env.BBANDS_INTERVAL||1),s.offModulesAutoSettings?(r.dynamicSettingsTime=!1,r.dynamicOffsetOrders=!1,r.trendDefinition=!1,r.abruptChangeTrend=!1,r.dangerPriceStop=!1):(r.dangerPriceStop=!(!+process.env.DANGER_PRICE_STOP&&!s.dangerPriceStop),r.dynamicSettingsTime=!(!+process.env.DYNAMIC_SETTINGS_TIME&&!s.dynamicSettingsTime),r.dynamicOffsetOrders=!(!+process.env.DYNAMIC_OFFSET_ORDERS&&!s.dynamicOffsetOrders),r.trendDefinition=!(!+process.env.TREND_DEFINITION&&!s.trendDefinition),r.abruptChangeTrend=!(!+process.env.ABRUPT_CHANGE_TREND&&!s.abruptChangeTrend)),r.email={reportEmail:process.env.EMAIL_BUG_REPORT_ADDRESS||s.emailReport,host:process.env.HOST_SMTP||"smtp.yandex.ru",port:465,secure:!0,auth:{user:process.env.EMAIL_AUTH_USER||s.emailUser,pass:process.env.EMAIL_AUTH_PASS||s.emailPass}},r.emailS=!!r.email.auth.user&&!!r.email.auth.pass&&!!r.email.reportEmail,module.exports=r}).call(this);
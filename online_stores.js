"use strict";
var nameProduct, priceProduct, discontProduct = 10, buyingQuantity = 2 ,countDiscontProduct, spentQ, priceProductЗercent = 100;
nameProduct = 'Телепорт бытовой VZHIH-101';
priceProduct = 10000;
countDiscontProduct = priceProduct * buyingQuantity * discontProduct / priceProductЗercent;
spentQ = priceProduct * buyingQuantity - countDiscontProduct ;
console.log(`В наличии имеется: \"${nameProduct}\"`);
console.log(`Стоимость товара ${priceProduct} Q`);
console.log(`Цена покупки составит ${spentQ} Q`);

// дополнительное задания
var accountTirm =  52334224, PurchasePriceTeleporter = 6500, canBuyTeleporter, remainderQ;
remainderQ = accountTirm % PurchasePriceTeleporter;
canBuyTeleporter = (accountTirm - remainderQ) / PurchasePriceTeleporter;
console.log(`Мы можем закупить ${canBuyTeleporter} единиц товара, после закупки на счету останется ${remainderQ} Q`);

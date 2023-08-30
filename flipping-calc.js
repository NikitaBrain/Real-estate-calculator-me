function calculateIncome() {
    const propertyType = document.getElementById("propertyType").value;
    const currencyType = document.getElementById("currencyType").value;
    const propertyPrice = parseFloat(document.getElementById("propertyPrice").value) || 0; // Проверка и установка в 0, если ничего не введено
    const repairyPrice = parseFloat(document.getElementById("repairyPrice").value) || 0;
    const taxInput = parseFloat(document.getElementById("taxInput").value) || 0; // Проверка и установка в 0, если ничего не введено
    const realtorCommissionInput = parseFloat(document.getElementById("realtorCommissionInput").value) || 0; // Проверка и установка в 0, если ничего не введено

    let invested, grossProfit, tax, realtorCommission;

    if (propertyType === "apartment") {
        invested = propertyPrice + repairyPrice;
        grossProfit = invested * 0.3;
        tax = grossProfit * (taxInput / 100);
        realtorCommission = (invested + grossProfit) * (realtorCommissionInput / 100);
    }
    else if (propertyType === "house") {
        invested = propertyPrice + repairyPrice;
        grossProfit = invested * 0.5;
        tax = grossProfit * (taxInput / 100);
        realtorCommission = (invested + grossProfit) * (realtorCommissionInput / 100);
    } 
    
    let netIncome = grossProfit - tax - realtorCommission;

    document.getElementById("grossProfit").textContent = `${grossProfit.toFixed(2)} ${currencyType}`;
    document.getElementById("tax").textContent = `${tax.toFixed(2)} ${currencyType}`;
    document.getElementById("realtorCommission").textContent = `${realtorCommission.toFixed(2)} ${currencyType}`;
    document.getElementById("netIncome").textContent = `${netIncome.toFixed(2)} ${currencyType}`;
}

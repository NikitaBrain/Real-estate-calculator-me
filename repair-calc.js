function calculateRepairs() {
    const propertyType = document.getElementById("propertyType").value;
    const repairyType = document.getElementById("repairyType").value;
    const repairyType2 = document.getElementById("repairyType2").value;
    const repairyType3 = document.getElementById("repairyType3").value;
    const square = parseFloat(document.getElementById("square").value) || 0; // Проверка и установка в 0, если ничего не введено

    let price, approximately = '≈';

    if (propertyType == "apartment") {
         if (repairyType == "easy") {
            if (repairyType2 == "newBuilding") {
                if (repairyType3 == "economy") {
                    price = square * 30;
                }
                else if (repairyType3 == "comfort") {
                    price = square * 70;
                }
                else if (repairyType3 == "designer") {
                    price = square * 150;
                }
            } 
            else if (repairyType2 == "secondaryHousing") {
                if (repairyType3 == "economy") {
                    price = square * 40;
                }
                else if (repairyType3 == "comfort") {
                    price = square * 100;
                }
                else if (repairyType3 == "designer") {
                    price = square * 190;
                }
            }
        }
        else if (repairyType == "difficult") {
            if (repairyType2 == "newBuilding") {
                if (repairyType3 == "economy") {
                    price = square * 200;
                }
                else if (repairyType3 == "comfort") {
                    price = square * 250;
                }
                else if (repairyType3 == "designer") {
                    price = square * 350;
                }
            } 
            else if (repairyType2 == "secondaryHousing") {
                if (repairyType3 == "economy") {
                    price = square * 190;
                }
                else if (repairyType3 == "comfort") {
                    price = square * 260;
                }
                else if (repairyType3 == "designer") {
                    price = square * 350;
                }
            }
        }
    }
    else if (propertyType == "house") {
        if (repairyType == "easy") {
            if (repairyType2 == "newBuilding") {
                if (repairyType3 == "economy") {
                    price = square * 30;
                }
                else if (repairyType3 == "comfort") {
                    price = square * 40;
                }
                else if (repairyType3 == "designer") {
                    price = square * 60;
                }
            } 
            else if (repairyType2 == "secondaryHousing") {
                if (repairyType3 == "economy") {
                    price = square * 20;
                }
                else if (repairyType3 == "comfort") {
                    price = square * 30;
                }
                else if (repairyType3 == "designer") {
                    price = square * 50;
                }
            }
        }
        else if (repairyType == "difficult") {
            if (repairyType2 == "newBuilding") {
                if (repairyType3 == "economy") {
                    price = square * 40;
                }
                else if (repairyType3 == "comfort") {
                    price = square * 50;
                }
                else if (repairyType3 == "designer") {
                    price = square * 70;
                }
            } 
            else if (repairyType2 == "secondaryHousing") {
                if (repairyType3 == "economy") {
                    price = square * 30;
                }
                else if (repairyType3 == "comfort") {
                    price = square * 40;
                }
                else if (repairyType3 == "designer") {
                    price = square * 60;
                }
            }
        }
    }

    document.getElementById("price").textContent = `${approximately} ${price} $`;
}

function distanceFromHqInBlocks(street) {
    if (`${street}` > 42) {
        return (`${street}` - 42);
    }
        else if (`${street}` < 42) {
            return (42 - `${street}`);
        }
}

function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(start, end) {
    if (`${end}` > `${start}`) {
        return (`${end}` - `${start}`) * 264;
    }
        else if (`${end}` < `${start}`) {
            return (`${start}` - `${end}`) * 264;
        }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 401) {
        return 0;
    }
        else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
            return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
        }
            else if (distanceTravelledInFeet(start, destination) > 2500) {
                return 'cannot travel that far';
            }
                else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
                    return 25;
                }
}
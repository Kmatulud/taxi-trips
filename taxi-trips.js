module.exports = async function TaxiTrips() {
    async function totalTripCount(){

    }
    async function findAllRegions(){

    }
    async function findTaxisForRegion(){

    }
    async function findTripsByRegNumber(){

    }
    async function findTripsByRegion(){

    }
    async function findIncomeByRegNumber(){

    }
    async function findTotalIncomePerTaxi(){

    }
    async function findTotalIncome(){

    }
    async function findTotalIncomeByRegion(){
        
    }
    async function deleteTaxiData(){
        // await pool.query('delete from fruit_basket');
    }
    return {
        totalTripCount,
        findAllRegions,
        findTripsByRegNumber,
        findTripsByRegion,
        findIncomeByRegNumber,
        findTotalIncomePerTaxi,
        findTotalIncome,
        findTotalIncomeByRegion,
        findTaxisForRegion,
        deleteTaxiData
    }
}
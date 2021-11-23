module.exports = async function TaxiTrips() {
    async function totalTripCount(){
        let info = await pool.query('select count(*) from trip');
        return info.rows[0].count;
    }
    async function findAllRegions(){
        let info = await pool.query('select region_name from trip from region');
        return info.rows;
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
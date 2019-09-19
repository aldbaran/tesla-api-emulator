module.exports = (app) => {
    var vehicles = require('../controllers/vehiclesController');

    // https://tesla-api.timdorr.com/api-basics/vehicles#get-api-1-vehicles
    app.route('/vehicles')
        .get(vehicles.list_all_vehicles);

    // https://tesla-api.timdorr.com/api-basics/vehicles#get-api-1-vehicles-id
    app.route('/vehicles/:id')
        .get(vehicles.read_a_vehicle);

    // https://tesla-api.timdorr.com/vehicle/state/data#get-api-1-vehicles-id-vehicle_data
    app.route('/vehicles/:id/vehicle_data')
        .get(vehicles.read_vehicle_data);

    // https://tesla-api.timdorr.com/vehicle/state/data#get-api-1-vehicles-id-data
    app.route('/vehicles/:id/data')
        .get(vehicles.read_vehicle_data);

    // https://tesla-api.timdorr.com/vehicle/state/chargestate#get-api-1-vehicles-id-data_request-charge_state
    app.route('/vehicles/:id/data_request/charge_state')
        .get(vehicles.read_vehicle_charge_state);

    // https://tesla-api.timdorr.com/vehicle/state/climatestate#get-api-1-vehicles-id-data_request-climate_state
    app.route('/vehicles/:id/data_request/climate_state')
        .get(vehicles.read_vehicle_climate_state);

    // https://tesla-api.timdorr.com/vehicle/state/drivestate#get-api-1-vehicles-id-data_request-drive_state
    app.route('/vehicles/:id/data_request/drive_state')
        .get(vehicles.read_vehicle_drive_state);

    // https://tesla-api.timdorr.com/vehicle/state/guisettings#get-api-1-vehicles-id-data_request-gui_settings
    app.route('/vehicles/:id/data_request/gui_settings')
        .get(vehicles.read_vehicle_gui_settings);

    // https://tesla-api.timdorr.com/vehicle/state/vehiclestate#get-api-1-vehicles-id-data_request-vehicle_state
    app.route('/vehicles/:id/data_request/vehicle_state')
        .get(vehicles.read_vehicle_vehicle_state);

    https://tesla-api.timdorr.com/vehicle/state/vehicleconfig#get-api-1-vehicles-id-data_request-vehicle_config
    app.route('/vehicles/:id/data_request/vehicle_config')
        .get(vehicles.read_vehicle_vehicle_config);

    // https://tesla-api.timdorr.com/vehicle/state/vehicleconfig#get-api-1-vehicles-id-data_request-vehicle_config
    app.route('/vehicles/:id/mobile_enabled')
        .get(vehicles.read_vehicle_mobile_enabled);

    // https://tesla-api.timdorr.com/vehicle/state/nearbychargingsites#get-api-1-vehicles-id-nearby_charging_sites
    app.route('/vehicles/:id/nearby_charging_sites')
        .get(vehicles.get_vehicle_nearby_charging_sites);

    // https://tesla-api.timdorr.com/vehicle/commands/wake#post-api-1-vehicles-id-wake_up
    app.route('/vehicles/:id/wake_up')
        .post(vehicles.wake_up);
}

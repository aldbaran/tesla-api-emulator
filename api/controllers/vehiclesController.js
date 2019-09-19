var _ = require('underscore'),
    vehicles = require('../models/vehiclesModel'),
    getVehicle = (all, id) => _.find(all, (v) => v.id_s === id),
    controller = {
        list_all_vehicles: (req, res) => {
            res.json({
                response: vehicles,
                count: vehicles.length
            });
        },

        read_a_vehicle: (req, res) => {
            res.json({
                response: _.chain(vehicles)
                    .getVehicle(req.params.id)
                    .omit([
                        'drive_state', 'climate_state', 'charge_state', 'vehicle_state', 'gui_settings', 'vehicle_config', 'mobile_enabled'
                    ])
                    .value()
            });
        },

        read_vehicle_data: (req, res) => {
            res.json({
                response: _.chain(vehicles)
                    .getVehicle(req.params.id)
                    .omit('mobile_enabled')
                    .value()
            });
        },

        read_vehicle_charge_state: (req, res) => {
            res.json({
                response: getVehicle(vehicles, req.params.id).charge_state
            })
        },

        read_vehicle_climate_state: (req, res) => {
            res.json({
                response: getVehicle(vehicles, req.params.id).climate_state
            })
        },

        read_vehicle_drive_state: (req, res) => {
            res.json({
                response: getVehicle(vehicles, req.params.id).drive_state
            })
        },

        read_vehicle_gui_settings: (req, res) => {
            res.json({
                response: getVehicle(vehicles, req.params.id).gui_settings
            })
        },

        read_vehicle_vehicle_state: (req, res) => {
            res.json({
                response: getVehicle(vehicles, req.params.id).vehicle_state
            })
        },

        read_vehicle_vehicle_config: (req, res) => {
            res.json({
                response: getVehicle(vehicles, req.params.id).vehicle_config
            })
        },

        read_vehicle_mobile_enabled: (req, res) => {
            res.json({
                response: getVehicle(vehicles, req.params.id).mobile_enabled
            })
        },

        get_vehicle_nearby_charging_sites: (req, res) => {
            // FIXME Search how to use tesla map API to get nearby vehicle info
            res.json({
                response: {}
            })
        },

        wake_up: (req, res) => {
            // FIXME change state of the vehicle and return its state
            controller.read_a_vehicle(req, res);
        }
    };

_.mixin({
    getVehicle: getVehicle
});

module.exports = controller;

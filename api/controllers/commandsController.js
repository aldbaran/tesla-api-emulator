var vehicles = require('../models/vehiclesModel');

module.exports = {
    honk_horn: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    flash_lights: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    remote_start_drive: (req, res) => {
        // TODO manage req.params.password parameter
        res.json({
            reason: "",
            result: true
        });
    },

    speed_limit_set_limit: (req, res) => {
        // TODO manage req.params.limit_mph parameter
        res.json({
            reason: "",
            result: true
        });
    },

    speed_limit_activate: (req, res) => {
        // TODO manage req.params.pin parameter
        res.json({
            reason: "",
            result: true
        });
    },

    speed_limit_deactivate: (req, res) => {
        // TODO manage req.params.pin parameter
        res.json({
            reason: "",
            result: true
        });
    },

    speed_limit_clear_pin: (req, res) => {
        // TODO manage req.params.pin parameter
        res.json({
            reason: "",
            result: true
        });
    },

    set_valet_mode: (req, res) => {
        // TODO manage req.params.on and req.params.password parameter
        res.json({
            reason: "",
            result: true
        });
    },

    reset_valet_pin: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    set_sentry_mode: (req, res) => {
        // TODO manage req.params.on parameter
        res.json({
            reason: "",
            result: true
        });
    },

    door_unlock: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    door_lock: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    actuate_trunk: (req, res) => {
        // TODO manage req.params.which_trunk parameter
        res.json({
            reason: "",
            result: true
        });
    },

    sun_roof_control: (req, res) => {
        // TODO manage req.params.state parameter
        res.json({
            reason: "",
            result: true
        });
    },

    charge_port_door_open: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    charge_port_door_close: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    charge_start: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    charge_stop: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    charge_standard: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    charge_max_range: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    set_charge_limit: (req, res) => {
        // TODO manage req.params.percent parameter
        res.json({
            reason: "",
            result: true
        });
    },

    auto_conditioning_start: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    auto_conditioning_stop: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    set_temps: (req, res) => {
        // TODO manage req.params.driver_temp or req.params.passenger_temp parameter
        res.json({
            reason: "",
            result: true
        });
    },

    remote_seat_heater_request: (req, res) => {
        // TODO manage req.params.heater and req.params.level parameter
        res.json({
            reason: "",
            result: true
        });
    },

    remote_steering_wheel_heater_request: (req, res) => {
        // TODO manage req.params.on parameter
        res.json({
            reason: "",
            result: true
        });
    },

    media_toggle_playback: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    media_next_track: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    media_prev_track: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    media_next_fav: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    media_prev_fav: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    media_volume_up: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    media_volume_down: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    },

    navigation_request: (req, res) => {
        // TODO manage req.params.type, req.params.locale, req.params.timestamp_ms, req.params.value[android.intent.extra.TEXT] parameters
        res.json({
            reason: "",
            result: true
        });
    },

    schedule_software_update: (req, res) => {
        // TODO manage req.params.offset_sec parameter
        res.json({
            reason: "",
            result: true
        });
    },

    cancel_software_update: (req, res) => {
        res.json({
            reason: "",
            result: true
        });
    }
}

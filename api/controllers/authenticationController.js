module.exports = {
    token: (req, res) => {
        // TODO manage req.params.grant_type, ... parameters
        res.json({
            "access_token": "abc123",
            "token_type": "bearer",
            "expires_in": 3888000,
            "refresh_token": "cba321",
            "created_at": 1538359034
        });
    }
};

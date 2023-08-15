const { Band, Manager, Song } = require('../models');
const { Op } = require("sequelize");

class Controller {
    static songsList(req, res) {
        Song.findAll({
            include: Band
        })
            .then((songs) => {

                res.render('songs-list', { songs })
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static songsAdd(req, res) {
        const { errors } = req.query
        Band.findAll()
            .then((bands) => {
                res.render('songs-add', { bands, errors })
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static songsStore(req, res) {
        const { name, duration, genre, bandId: BandId } = req.body
        Song.create({ name, duration, genre, BandId })
            .then(() => {
                res.redirect('/songs')
            })
            .catch((err) => {
                if (err) {
                    if (err.name === "SequelizeValidationError") {
                        const errors = err.errors.map((el) => {
                            return el.message
                        })
                        //res.send(errors);
                        res.redirect('/songs/add?errors=' + errors.join(';'))
                    } else {
                        res.send(err);
                    }
                } else {
                    res.send("sth went wrong")
                }
            })
    }
};

module.exports = Controller;
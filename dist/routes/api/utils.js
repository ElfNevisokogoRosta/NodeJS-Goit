class NotFoundErrorI extends Error {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
        this.status = 404;
    }
}
module.exports = NotFoundErrorI;
//# sourceMappingURL=utils.js.map
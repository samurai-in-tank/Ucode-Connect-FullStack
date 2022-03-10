module.exports = class Access {
    constructor(znach) { this.mark_LXXXV = znach; }
    get mark_LXXXV() {
        if(this._mark_LXXXV === undefined) return 'undefined';
        if(this._mark_LXXXV === null) return 'null';
        
        return this._mark_LXXXV;
    }
    set mark_LXXXV(znach) { this._mark_LXXXV = znach; }
}

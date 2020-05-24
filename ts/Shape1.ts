class Shape {
    public center: Point;
    constructor(x: number, y: number){
        this.center = new Point(x, y);
    }
    public draw(){}
    public setCenter(center: Point){
        this.center = center;
    }
    public getCenter(){
        return this.center;
    }
}
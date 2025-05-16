// to represent a geometric shape
interface IShape {
    // to compute the area of this shape
    double area();
    
    // to compute the distance form this shape to the origin
    double distToOrigin();
    
    // to increase the size of this shape by the given increment
    IShape grow(int inc);
    
    // is the area of this shape bigger than the area of the given shape?
    boolean biggerThan(IShape that);
    
    // does this shape (including the boundary) contain the given point?
    boolean contains(CartPt pt);
}

// to represent a Cartesian point
class CartPt {
    int x;
    int y;
    
    CartPt(int x, int y) {
        this.x = x;
        this.y = y;
    }
    
    // to compute the distance form this point to the origin
    public double distToOrigin(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    
    // to compute the distance form this point to the given point
    public double distTo(CartPt pt){
        return Math.sqrt((this.x - pt.x) * (this.x - pt.x) + 
                         (this.y - pt.y) * (this.y - pt.y));
    }
}

class Combo implements IShape {
    IShape s1;
    IShape s2;

    Combo(IShape s1, IShape s2) {
        this.s1= s1;
        this.s2 = s2;
    }

    public double distToOrigin() {
        if (s1.distToOrigin() < s2.distToOrigin()) {
            return s1.distToOrigin();
        } else {
            return s2.distToOrigin();
        }
    }

    public double area() {
        return s1.area() + s2.area();
    }

    public IShape grow(int inc) {
        return new Combo(s1.grow(inc), s2.grow(inc));
    }

    public boolean contains(CartPt pt) {
        return s1.contains(pt) || s2.contains(pt);
    }

    public boolean biggerThan(IShape than) {
        return (s1.area() > than.area() || s2.area() > than.area());
    }

}
export class add
{
    a:number
    b:number
    c:number
    
    setNumbers(x:number,y:number)
    {
        this.a=x;
        this.b=y;
    }
    getNumbers():number
    {
        return(this.a,this.b)
    }
        
}
var num =new add()

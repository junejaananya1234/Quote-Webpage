import Header from "../Header/Header"
import Card from "../Quote/Card/"
function Quote(){
    const quotes = [
        {
            q :"Life is what happens when you're busy making other plans.",
            author : "John Lennon"
        },
        {
            q : "The greatest glory in living lies not in never falling, but in rising every time we fall",
            author : "Nelson Mandela"
        },
        {
            q : "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful",
            author : "Albert Schweitzer"
            
        },
        {
            q : "The road to success and the road to failure are almost exactly the same",
            author : "Colin R. Davis"
        },
        {
            q : "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
            author : "John F. Kennedy"
            
        },
        {
            q : "In the end, it's not the years in your life that count. It's the life in your years",
            author : "Abraham Lincoln"
        },
        {
            q : "The harder you work for something, the greater you'll feel when you achieve it",
            author : "Franklin D. Roosevelt"
        },
        {
            q : "Opportunities don't happen, you create them",
            author : "Chris Grosser"
        },
        {
            q : "The only limit to our realization of tomorrow will be our doubts of today",
            author : "Franklin D. Roosevelt"
            
        }
    ]
    return(
       <div>
        <Header></Header>
        <section>
         {
            quotes.map((item, index )=>{
                return <Card  key={index} quote={item.q} author={item.author}/> //yeh item total ek object hogya isme
            })
         }
        </section>
       </div>
    )
}
export default Quote;
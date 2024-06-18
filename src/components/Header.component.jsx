import logo from "../assets/investment-calculator-logo.png";
export default function HeaderComponent(){
    return (
       <header>
        <div id="header">
        <img src={logo} alt="logo" loading="lazy" />
        <h1> React investment Calculator </h1>
        </div>
        </header>
    )
}
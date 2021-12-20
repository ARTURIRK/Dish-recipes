import img from '../img1.png';
function About() {
  const style = {
    maxWidth: '99%',
    textAlign: 'center',
    margin: '0 auto',
    fontFamily: 'Montserrat',
    color: 'rgb(177, 40, 40)',
    marginBottom: '30px',
    }
  const style1 = {
    textAlign: 'center',
  }
  return  <div style={style1}>
  <h1 style={style}> In our site you can find some interesting recipes to improve your cooking skills </h1>
  <img src={img} alt='img1'/>
  </div>
}
export {About};
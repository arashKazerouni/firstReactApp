import Product from './components/Product/Product';
const App = () => {
    return (  
        <>
        <h2>shopping app</h2>
        <Product name="react" price="12$"/>
        <Product name="vue" price="10$"/>
        <Product name="angular" price="8$"/>
        </>
    );
}
 
export default App;
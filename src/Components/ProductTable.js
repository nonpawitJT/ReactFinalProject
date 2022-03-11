import React from 'react'
import axios from 'axios'
import styled from "styled-components";

import { addToCart } from '../redux/actions/cartAction';
import { useSelector,useDispatch } from 'react-redux';
const ProductPage = () => {

    const [product, setProduct] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cartReducer.cart)
    const total = useSelector((state) => state.cartReducer.total)



    const getData = async () => {
        try {
            setLoading(true) //เริ่มหมุนติ้วๆ
            const resp = await axios.get('https://api.codingthailand.com/api/course')
            // console.log(resp.data)
            setProduct(resp.data.data)
        } catch (error) {
            // console.log(eror.response)
            setError(error)
        }
        finally {
            setLoading(false) //หยุดตรงนี้ทุกกรณี
        }
    }

    React.useEffect(() => {
        getData()
    }, [])

    if (loading === true) {
        return (
            <div className="text-center mt-5">
                <p>loading...</p>
            </div>
        )
    }
    const addCart =(p)=>{
     const product = {
         id:p.id,
         name : p.title,
         price:p.view,
         qty:1
     }

     dispatch(addToCart(product,cart))
    }
    if (error) {
        return (
            <div >
                <h4>Error from API,please try again</h4>
                <p>{error.response.data.message}</p>
            </div>
        )
    }

    return (
        <TableStyled>
                    <table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Course Detail</th>
                                <th>Created Date</th>
                                <th>View</th>
                                <th>Picture</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map((p, index) => {
                                    return (
                                        <tr key={p.id}>
                                            <td>{p.id}</td>
                                            <td>{p.title}</td>
                                            <td>{p.detail}</td>
                                            <td>{p.date}</td>
                                            <td> {p.view}</td>
                                            <td> <img src={p.picture} rounded width={60} /> </td>
                                            <td>
                                             
                                          
                                                <button  variant="outline-warning" className="ml-2" onClick={()=> addCart(p)}>Buy </button>
                                            </td>

                                        </tr>

                                    )
                                })

                            }





                        </tbody>
                    </table>
                    </TableStyled>
    )
}

const TableStyled = styled.div`
margin-top : 2rem;
table{
    width:100%;
    table-layout: fixed;
  }
  .tbl-header{
    background-color: rgba(255,255,255,0.3);
   }
  .tbl-content{
    height:300px;
    overflow-x:auto;
    margin-top: 0px;
    border: 1px solid rgba(255,255,255,0.3);
  }
  th{
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
   
    color:var(--white-color);
    text-transform: uppercase;
  }
  td{
    padding: 15px;
    text-align: left;
    vertical-align:middle;
    font-weight: 300;
    
    color: var(--white-color);
    border-bottom: solid 1px rgba(255,255,255,0.1);
  }
  
`;

export default ProductPage

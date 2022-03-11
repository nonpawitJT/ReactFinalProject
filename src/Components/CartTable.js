import React from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";

export default function CartPage() {
    const cart = useSelector((state) => state.cartReducer.cart)
    const total = useSelector((state) => state.cartReducer.total)

    return (
        <TableStyled>
              
              <table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>ProductId</th>
                    <th>ProductName</th>
                    <th>ProductPrice</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  cart.map((s, index) => {
                      
                    return (
                        <tr key={s.id}>
                        <td>{++index}</td>
                        <td>{s.id}</td>
                        <td>{s.name}</td>
                        <td>{s.price}</td>
                        <td>{s.qty}</td>
                        <td>{s.price * s .qty}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </TableStyled>
      );
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
import React from 'react'

export const Show = ({ data,onRemove }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tên danh mục</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => {
                        return (
                            <tr>
                                <th>{item._id}</th>
                                <th>{item.name}</th>
                                <th> 
                                    <button type="button" onClick={()=>onRemove(item._id)}>Xóa</button>
                                </th>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFoods } from '../action/foodsAction'
import Error from '../components/Error'
import Food from '../components/Food'
import Loading from '../components/Loading'

export default function Homescreen() {

    const dispatch = useDispatch()

    const foodsstate = useSelector(state => state.getAllFoodsReducer)

    const { foods, error, loading } = foodsstate

    useEffect(() => {
        dispatch(getAllFoods())
    }, [])


    return (
        <div>
            <div className="row justify-content-center">

                {loading ? (
                    <Loading/>
                ) : error ? (
                    <Error error='Something went wrong!'/>
                ) : (
                    foods.map(food => {

                        return <div className="col-md-3 m-3" key = {food._id}>
                            <div>
                                <Food food={food} />
                            </div>
                        </div>
                    })

                )}
            </div>
        </div>
    )
}
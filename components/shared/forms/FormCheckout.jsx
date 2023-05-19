import React, { useEffect, useState } from "react";
import { select } from "redux-saga/effects";
import ModuleCheckoutSummary from "~/components/shared/forms/modules/ModuleCheckoutSummary";
import useStore from "~/hooks/store/useStore";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

const FormCheckout = () => {
    // const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState(new Date());
    const [showAddress, setShowAddress] = useState(false);
    const [storeAddress, setStoreAddress] = useState("");
    const { getListStore, listStore, isLoading, getStore } = useStore();

    useEffect(() => {
        getListStore();
    }, []);

    const handleStoreChange = (event) => {
        var storeId = event.target.value,
            storeAddress = "";
        listStore.forEach(function (store) {
            if (storeId == store.id) {
                console.log(store.address);
                setShowAddress(true);
                storeAddress =
                    store.address.detail +
                    store.address.ward +
                    store.address.district +
                    store.address.city;
                setStoreAddress(store.address);
                return false;
            }
        });
    };
    return (
        <form className="ps-form--checkout" action="/" method="get">
            <div className="ps-form__billings">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>
                                Please choose a store <sup>*</sup>
                            </label>
                            <select
                                className="ps-select form-control"
                                onChange={handleStoreChange}>
                                {listStore.map(
                                    ({ id, name, address }, index) => (
                                        <option value={id}>
                                            {name} ({address.map_name}){" "}
                                        </option>
                                    )
                                )}
                            </select>
                            <div
                                style={{
                                    display: showAddress ? "block" : "none",
                                }}>
                                <table>
                                    <tr>
                                        <td>Tỉnh/Thành Phố: </td>
                                        <td>{storeAddress.city}</td>
                                    </tr>
                                    <tr>
                                        <td>Quận/Huyện: </td>
                                        <td>{storeAddress.district}</td>
                                    </tr>
                                    <tr>
                                        <td>Phường/Xã:</td>
                                        <td>{storeAddress.ward}</td>
                                    </tr>
                                    <tr>
                                        <td>Số nhà/Đường:</td>
                                        <td>{storeAddress.detail}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label>Please choose a time to pick up</label>
                            <div class="input-group date" id="datetimepicker1">
                                <DateTimePicker
                                    style="boder: none"
                                    className="form-control"
                                    onChange={onChange}
                                    value={value}
                                    format="d-m-y H:m"
                                />
                                <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-calendar"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>Order notes (optional)</label>
                            <textarea
                                className="form-control"
                                rows="6"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FormCheckout;

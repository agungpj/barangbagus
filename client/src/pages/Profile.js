import React, { useContext } from "react";
import profile from "../assets/profile.png";
import product1 from "../assets/product2.png";
import dumbmerch from "../assets/DumbMerch.png";
import Navbar from "../components/Navbar";
import convertRupiah from "rupiah-format";
import dateFormat from "dateformat";
import { useNavigate } from "react-router-dom";
// Import useQuery
import { UserContext } from "../context/userContext";

import { useQuery } from "react-query";
import imgBlank from "../assets/blank-profile.png";

// API config
import { API } from "../config/api";
function Profile() {
  const navigate = useNavigate;
  const [state] = useContext(UserContext);

  // Fetching profile data from database
  let { data: profile, refetch: profileRefetch } = useQuery(
    "profileCache",
    async () => {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
      };
      const response = await API.get("/profile", config);
      return response.data;
    }
  );

  const handleEdit = (id) => {
    navigate("/edit-profile/" + id);
  };

  // Fetching transactions data from database
  let { data: transactions, refetch: transactionsRefetch } = useQuery(
    "transactionsCache",
    async () => {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
      };
      const response = await API.get("/transactions", config);
      return response.data;
    }
  );
  return (
    <>
      <Navbar />
      <div className="my-5">
        <div>
          <div md="6">
            <div className="text-header-product mb-4">My Profile</div>
            <div>
              <div md="6">
                <img
                  src={profile?.image ? profile.image : imgBlank}
                  className="img-fluid rounded"
                  alt="profile"
                />
              </div>
              <div md="6">
                <div className="profile-header">Name</div>
                <div className="profile-content">{state.user.name}</div>

                <div className="profile-header">Email</div>
                <div className="profile-content">{state.user.email}</div>

                <div className="profile-header">Phone</div>
                <div className="profile-content">
                  {profile?.phone ? profile?.phone : "-"}
                </div>

                <div className="profile-header">Gender</div>
                <div className="profile-content">
                  {profile?.gender ? profile?.gender : "-"}
                </div>

                <div className="profile-header">Address</div>
                <div className="profile-content">
                  {profile?.address ? profile?.address : "-"}
                </div>
              </div>
            </div>
          </div>
          <div md="6">
            <div className="text-header-product mb-4">My Transaction</div>
            {transactions?.length != 0 ? (
              <>
                {transactions?.map((item) => (
                  <div style={{ background: "#303030" }} className="p-2 mb-1">
                    <div fluid className="px-1">
                      <div>
                        <div xs="3">
                          <img
                            src={item.product.image}
                            alt="img"
                            className="img-fluid"
                            style={{
                              height: "120px",
                              width: "170px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div xs="6">
                          <div
                            style={{
                              fontSize: "18px",
                              divor: "#F74D4D",
                              fontWeight: "500",
                              lineHeight: "19px",
                            }}
                          >
                            {item.product.name}
                          </div>
                          <div
                            className="mt-2"
                            style={{
                              fontSize: "14px",
                              divor: "#F74D4D",
                              fontWeight: "300",
                              lineHeight: "19px",
                            }}
                          >
                            {dateFormat(
                              item.createdAt,
                              "dddd, d mmmm yyyy, HH:MM "
                            )}
                            WIB
                          </div>

                          <div
                            className="mt-3"
                            style={{
                              fontSize: "14px",
                              fontWeight: "300",
                            }}
                          >
                            Price : {convertRupiah.convert(item.price)}
                          </div>

                          <div
                            className="mt-3"
                            style={{
                              fontSize: "14px",
                              fontWeight: "700",
                            }}
                          >
                            Sub Total : {convertRupiah.convert(item.price)}
                          </div>
                        </div>
                        <div xs="3">
                          <div
                            className={`status-transaction-${item.status} rounded h-100 d-flex align-items-center justify-content-center`}
                          >
                            {item.status}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="no-data-transaction">No transaction</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
	const HomeRightbar = () => {
		return (
			<>
				<div className="birthdayContainer">
					<img
						src="/assets/gift.png"
						alt=""
						className="birthdayImg"
					/>
					<span className="birthdayText">
						<b>Mike Cox</b> and <b>4 other friends</b> have a
						birthday today
					</span>
				</div>
				<img src="/assets/ad.png" alt="" className="rightbarAd" />
				<h4 className="rightbarTitle">Online friends</h4>
				<ul className="rightbarFriendList">
					{Users.map((u) => (
						<Online key={u.id} user={u} />
					))}
				</ul>
			</>
		);
	};

	const ProfileRightbar = () => {
		return (
			<>
				<h4 className="rightbarProfileTitle">User Information</h4>
				<div className="rightbarInfo">
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">City:</span>
						<span className="rightbarInfoValue">Malaveshwaram</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">From:</span>
						<span className="rightbarInfoValue">Madras</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">Relationship:</span>
						<span className="rightbarInfoValue">Single</span>
					</div>
				</div>
				<h4 className="rightbarProfileTitle">User friends</h4>
				<div className="rightbarFollowings">
					<div className="rightbarFollowing">
						<img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">Reddy Anna</span>
					</div>
					<div className="rightbarFollowing">
						<img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">Reddy Anna</span>
					</div>
					<div className="rightbarFollowing">
						<img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">Reddy Anna</span>
					</div>
					<div className="rightbarFollowing">
						<img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">Reddy Anna</span>
					</div>
					<div className="rightbarFollowing">
						<img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">Reddy Anna</span>
					</div>
					<div className="rightbarFollowing">
						<img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">Reddy Anna</span>
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			<div className="rightbar">
				<div className="rightbarWrapper">
					<ProfileRightbar/>
				</div>
			</div>
		</>
	);
}

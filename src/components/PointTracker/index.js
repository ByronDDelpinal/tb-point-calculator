import { useState } from "react";

import CategoryPointsSection from "../CategoryPointsSection";
import ItemCheckbox from "../ItemCheckbox";
import ItemTextbox from "../ItemTextbox";

import { calculateTotalPoints } from "../../helpers/calculate-points";

const PointTracker = () => {
  const [committee, setCommittee] = useState({
    display: "Committee",
    items: [],
    maxPoints: 30,
  });
  const [tbVolunteer, setTbVolunteer] = useState({
    display: "TB Volunteer",
    items: [],
    maxPoints: 60,
  });
  const [outsideVolunteer, setOutsideVolunteer] = useState({
    display: "Outside Volunteer",
    items: [],
    maxPoints: 30,
  });
  const [retreat, setRetreat] = useState({
    display: "Membership Retreat",
    items: [],
    maxPoints: 15,
  });
  const [gmm, setGmm] = useState({
    display: "GMM Attendance",
    items: [],
    maxPoints: 30,
  });
  const [miscEvents, setMiscEvents] = useState({
    display: "Misc. Events",
    items: [],
    maxPoints: 15,
  });
  const [social, setSocial] = useState({
    display: "Social Events",
    items: [],
    maxPoints: 15,
  });
  const [discretionary, setDiscretionary] = useState({
    display: "Discretionary",
    items: [],
    maxPoints: 5,
  });

  return (
    <section>
      <p>
        The purpose of this calculator is to provide an interactive way to plan
        and understand how to get your 100 (and beyond!) points in a single year
        as a Torchbearer. There are a maximum number of points for each
        category, listed with that category. Once you exceed that category, you
        cannot conitnue to earn points towards it. This is not to discourage you
        from doing any more of that thing, but rather to ensure your experience
        in the organization is holistically well-rounded and not shaped by only
        one aspect of it. We encourage you to continue moving forward with your
        passion even if you are maxed on points while you explore other aspects
        of giving and learning that TB has to offer.
      </p>
      <hr />
      <CategoryPointsSection category={committee} key={committee.display}>
        <p>
          Committee Co-Chairs will allocate points to committee members,
          co-chairs, and Board Liaisons based on a member’s committee
          engagement. Co-Chairs should collaborate with their Board Liaisons to
          create a rubric for committee point structure. The Board recommends
          the following as a baseline: Committee Attendance- 1 point per
          committee meeting; Special Roles (Secretary, DEI Liaison, Project
          Lead/Chair)- 10 points max per role.
        </p>
        <p>
          Subcommittees and Taskforces can award no more than 15 points, and
          this will fall within the “Committee Participation” category with a
          max of 30 points total. Subcommittee Chairs should submit points for
          their members to the Membership Committee. Members are not required to
          join a subcommittee and can earn the full 30 points from their primary
          committee.
        </p>
        <div className="selection-items">
          <ItemCheckbox
            category={committee}
            setCategoryPointsMethod={setCommittee}
            itemDisplay={"I am a board member."}
            itemId={"boardMember"}
            itemPoints={30}
          />
          <ItemCheckbox
            category={committee}
            setCategoryPointsMethod={setCommittee}
            itemDisplay={"I serve a special role on my committee."}
            itemId={"committeeSpecialRole"}
            itemPoints={10}
          />
          <ItemCheckbox
            category={committee}
            setCategoryPointsMethod={setCommittee}
            itemDisplay={"I am a committee chair."}
            itemId={"committeeChair"}
            itemPoints={30}
          />
          <ItemCheckbox
            category={committee}
            setCategoryPointsMethod={setCommittee}
            itemDisplay={"I am a taskforce chair."}
            itemId={"taskforceChair"}
            itemPoints={30}
          />
          <ItemTextbox
            category={committee}
            setCategoryPointsMethod={setCommittee}
            itemDisplay={" committee meetings."}
            itemId={"committeeAttendance"}
            pointsPerQuantity={1}
            maxQuantity={12}
          />
          <ItemTextbox
            category={committee}
            setCategoryPointsMethod={setCommittee}
            itemDisplay={" points from a Taskforce or Committee."}
            itemId={"subcommitteeOrTaskforce"}
            pointsPerQuantity={1}
          />
        </div>
      </CategoryPointsSection>

      <CategoryPointsSection category={tbVolunteer} key={tbVolunteer.display}>
        <div className="selection-items">
          <ItemTextbox
            category={tbVolunteer}
            setCategoryPointsMethod={setTbVolunteer}
            itemDisplay={" hours of TB sponsored volunteering events."}
            itemId={"tbServiceHours"}
            pointsPerQuantity={5}
          />
        </div>
      </CategoryPointsSection>

      <CategoryPointsSection
        category={outsideVolunteer}
        key={outsideVolunteer.display}
      >
        <p>
          TB members can receive credit for any outside service, provided it
          aligns with Torchbearers’ Mission and Vision. To potentially receive
          credit for service performed outside of Torchbearers, please complete
          the “Submit Non-TB Service Hours” form on the Resources page of the
          website.
        </p>
        <div className="selection-items">
          <ItemTextbox
            category={outsideVolunteer}
            setCategoryPointsMethod={setOutsideVolunteer}
            itemDisplay={" hours of non-TB volunteering events."}
            itemId={"outsideServiceHours"}
            pointsPerQuantity={1}
          />
        </div>
      </CategoryPointsSection>

      <CategoryPointsSection category={retreat} key={retreat.display}>
        <div className="selection-items">
          <ItemCheckbox
            category={retreat}
            setCategoryPointsMethod={setRetreat}
            itemDisplay={"Attend Friday of the membership retreat."}
            itemId={"fridayRetreat"}
            itemPoints={5}
          />
          <ItemCheckbox
            category={retreat}
            setCategoryPointsMethod={setRetreat}
            itemDisplay={"Attend Saturday of the membership retreat."}
            itemId={"saturdayRetreat"}
            itemPoints={10}
          />
        </div>
      </CategoryPointsSection>

      <CategoryPointsSection category={gmm} key={gmm.display}>
        <div className="selection-items">
          <ItemTextbox
            category={gmm}
            setCategoryPointsMethod={setGmm}
            itemDisplay={" GMMs."}
            itemId={"committeeAttendance"}
            pointsPerQuantity={6}
          />
        </div>
      </CategoryPointsSection>

      <CategoryPointsSection category={miscEvents} key={miscEvents.display}>
        <p>
          Miscellaneous events include (but are not limited to) L&D Presents,
          Anniversary, Subcommittee/Taskforce events, and TB Fundraisers
        </p>
        <div className="selection-items">
          <ItemTextbox
            category={miscEvents}
            setCategoryPointsMethod={setMiscEvents}
            itemDisplay={" hours at miscellaneous events."}
            itemId={"miscEventAttendance"}
            pointsPerQuantity={3}
          />
        </div>
      </CategoryPointsSection>

      <CategoryPointsSection category={social} key={social.display}>
        <div className="selection-items">
          <ItemTextbox
            category={social}
            setCategoryPointsMethod={setSocial}
            itemDisplay={" hours of social events."}
            itemId={"socialEventAttendance"}
            pointsPerQuantity={1}
          />
        </div>
      </CategoryPointsSection>

      <CategoryPointsSection
        category={discretionary}
        key={discretionary.display}
      >
        <div className="selection-items">
          <ItemTextbox
            category={discretionary}
            setCategoryPointsMethod={setDiscretionary}
            itemDisplay={" discretionary points."}
            itemId={"discretionaryPoints"}
            pointsPerQuantity={1}
          />
        </div>
      </CategoryPointsSection>
      <div className="floating-total">
        Elligable Total:{" "}
        <span className="total-number">
          {calculateTotalPoints([
            committee,
            tbVolunteer,
            outsideVolunteer,
            retreat,
            gmm,
            miscEvents,
            social,
            discretionary,
          ])}
        </span>
      </div>
    </section>
  );
};

export default PointTracker;

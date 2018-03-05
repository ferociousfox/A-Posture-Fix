import React from 'react';
import Activity from './Activity'

const masterActivityList = [
  {
    name: 'Pint Glass Exercise',
    purpose: 'Shoulder opening and strenthening',
    duration: '10 repititions',
    requiredEquipment: 'hand towel',
    description: 'Start with your arms at your sides holding the hand towel with palms facing eachother. Next, bend elbows ninety degrees and pull the towel taught with hands slightly wider than your shoulders. Lift arms, while keeping elbows at ninety degrees, keeping tension in the cloth and elbows as close together as possible.'
    pitfalls: 'Take care not to arch your back or let your elbows drift apart. When your upper arms are parallel to the ground the activity shoudl feel difficult, if at this point in the activity you do not feel some resistance your elbows are not close enought together and wrists are too close together.'
  },
  {
    name: 'Rows',
    purpose: 'shoulder mobility and strength',
    duration: '2 min',
    requiredEquipment: 'Sport People therapy bands and a door that you can latch closed',
    description: 'Secure your band in the door as directed, grab the handles in each hand and move back from the door putting a good amount of tension in the band. Next, extend your arms out in front of you until your elbows are mosty straight. Then, pull your hands into your ribcage keeping your elbows close to your body, and repeat.',
    pitfalls: 'Take care not to arch your back. Keep your core tight by drawing your navel towards your spine.'
  },
  {
    name: 'Walk',
    purpose: 'mobility and mental clarity',
    duration: '5-20 minutes'
    requiredEquipment: 'shoes',
    description: 'Take a five to twenty minute walk',
    pitfalls: 'being hunched over the phone the whole time.'
  },
  {
    name: 'Foundations Training',
    purpose: 'Back, shoulder, and core strenthening',
    duration: '7 minutes',
    requiredEquipment: 'Foundations Training Video',
    description: 'Do the initial workout, follow the instructions closely. ideally in front of a mirror so you can see what your body is doing',
    pitfalls: 'This work out should feel moderate to difficult, if it seems easy you are likely missing something, check out the instructions again and do it in front of a mirror.',
  },
  {
    name: 'Wash Cloth Balance',
    purpose: 'Neck alignment and positioning',
    duration: '10-15 minutes',
    requiredEquipment: 'a wash cloth or small juggling bean-bag',
    description: 'Find the crown of you head and place the folded cloth or bean-bag there. Next lightly push your head up into the object on your head. Push while bringing you chin back and crown up towards the ceiling.',
    pitfalls: 'Take care not to put the object to close to the front of your head, there by needing to bring your chin up to keep the object balanced.',
  },
  {
    name: 'Quick stretch',
    purpose: 'mobility and body awareness',
    duration: '2 minutes',
    requiredEquipment: 'none',
    description: 'Reach up with both arms to the ceiling, lengthening torso and spine. Next, hinge at the hips, while keeping your back straight and long, fold forward and reach toward the ground.',
    pitfalls: 'Take care when reaching up not to arch your back, and when you are folding forward, take care not to bend your spine at all. This is different than your usual hamstring stretch or forward fold. It is extremely important not to bend forward with your spine.',
  }
]

function ActivityList(){
  return(
    <div>
      {masterActivityList.map((acitvity, index) =>
        <Activity
          name={activity.name}
          purpose={acitvity.purpose}
          duration={activity.duration}
          requiredEquipment={activity.requiredEquipment}
          description={activity.description}
          pitfalls={activity.pitfalls}
          key={index}/>
      )}
    </div>
  );
}

export default ActivityList;

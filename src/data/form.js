
const data = {
	"questions": [
		{	
			"id": "is_heartburn_known",
			"question_text": "Is your heartburn previously known?",
			"answers": [
				{"id": "is_heartburn_known_yes", "label": "Yes", "score": 5},
				{"id": "is_heartburn_known_no", "label": "No", "score": 0}
			],
			"next": [
				{"answered": "is_heartburn_known_yes", "next_question": "heartburn_previous_treatment"},
				{"answered": "is_heartburn_known_no", "next_question": "heartburn_weekly_burns"}
			]
		},
		{	
			"id": "heartburn_previous_treatment",
			"question_text": "Have you received any treatment for heartburn previously?",
			"answers": [
				{"id": "heartburn_previous_treatment_yes", "label": "Yes", "score": 0},
				{"id": "heartburn_previous_treatment_no", "label": "No", "score": 0}
			],
			"next": [
				{"next_question": "heartburn_weekly_burns"}
			]
		},
		{	
			"id": "heartburn_weekly_burns",
			"question_text": "During a regular week, how often do you have a burning sensation behind your sternum (heartburn)",
			"answers": [
				{"id": "heartburn_weekly_burns_0_to_3", "label": "0-3 days", "score": 0},
				{"id": "heartburn_weekly_burns_4_to_7", "label": "4-7 days", "score": 10}
			],
			"next": [
				{"next_question": "heartburn_weekly_gastric"}
			]
		},
		{
			"id": "heartburn_weekly_gastric",
			"question_text": "During a regular week, how often do you feel gastric content (solid or liquid) moving upwards against the throat or mouth (regurgitation)?",
			"answers": [
				{"id": "heartburn_weekly_gastric_0_to_3", "label": "0-3 days", "score": 0},
				{"id": "heartburn_weekly_gastric_4_to_7", "label": "4-7 days", "score": 10}
			],
			"next": [
				{"next_question": "heartburn_weekly_pain"}
			]
		},
		{
			"id": "heartburn_weekly_pain",
			"question_text": "During a regular week, how often do you have pain in the upper and middle part of the stomach?",
			"answers": [
				{"id": "heartburn_weekly_pain_0_to_3", "label": "0-3 days", "score": 0},
				{"id": "heartburn_weekly_pain_4_to_7", "label": "4-7 days", "score": 10}
			],
			"next": [
				{"next_question": "heartburn_weekly_nauseus"}
			]
		},
		{
			"id": "heartburn_weekly_nauseus",
			"question_text": "During a regular week, how often do you feel nauseus?",
			"answers": [
				{"id": "heartburn_weekly_nauseus_0_to_3", "label": "0-3 days", "score": 0},
				{"id": "heartburn_weekly_nauseus_4_to_7", "label": "4-7 days", "score": 10}
			],
			"next": [
				{"next_question": "heartburn_weekly_sleep"}
			]
		},
		{
			"id": "heartburn_weekly_sleep",
			"question_text": "During a regular week, how often are you struggling to sleep well because of heartburn and / or regurgitations?",
			"answers": [
				{"id": "heartburn_weekly_sleep_0_to_3", "label": "0-3 days", "score": 0},
				{"id": "heartburn_weekly_sleep_4_to_7", "label": "4-7 days", "score": 10}
			],
			"next": [
				{"next_question": "heartburn_swallowing"}
			]
		},
		{
			"id": "heartburn_swallowing",
			"question_text": "Do you have difficulty swallowing?",
			"answers": [
				{"id": "heartburn_swallowing_yes", "label": "Yes", "score": 25},
				{"id": "heartburn_swallowing_no", "label": "No", "score": 0}
			],
			"next": [
				{"next_question": "heartburn_blood_stool"}
			]
		},
		{
			"id": "heartburn_blood_stool",
			"question_text": "Have you seen blood in the stool or vomited blood?",
			"answers": [
				{"id": "heartburn_blood_stool_yes", "label": "Yes", "score": 25},
				{"id": "heartburn_blood_stool_no", "label": "No", "score": 0}
			],
			"next": [
				{"next_question": "heartburn_lost_weight"}
			]
		},
		{
			"id": "heartburn_lost_weight",
			"question_text": "Have you lost weight unvolontarily?",	
			"answers": [
				{"id": "heartburn_lost_weight_yes", "label": "Yes", "score": 25},
				{"id": "heartburn_lost_weight_no", "label": "No", "score": 0}
			],
			"next": [
				{"max_score": 5, "outcome": "rest_and_come_back_later"},
				{"max_score": 49, "outcome": "see_a_doctor"},
				{"outcome": "go_to_emergency_room"}
			]
		}
	],
	"outcomes": [
		{
			"id": "rest_and_come_back_later",
			"text": "Your symptom description indicates that this is a self-healing condition. We recommend that you rest for few days. Contact us again if your condition gets worse or if symptoms remain for more than three days.",
			"show_booking_button": false
		},
		{
			"id": "see_a_doctor",
			"text": "Your symptom description indicates that you are in need of medical care. Good news – KRY can help. Book an appointment with one of our doctors.",
			"show_booking_button": true
		},
		{
			"id": "go_to_emergency_room",
			"text": "Your symptom description indicates that you are in need of URGENT medical care. Go directly to the nearest emergency room. If you are unable to do so, call an ambulance.",
			"show_booking_button": false
		}
	]
}

export default data;
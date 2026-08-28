console.log("ARISE is ready.");


// =============================
// PROGRAM MODAL
// =============================

const programModal = document.getElementById("programModal");

if (programModal) {

    const programButtons = document.querySelectorAll(".program-btn");

    const modalClose = document.getElementById("modalClose");
    const modalTitle = document.getElementById("modalTitle");
    const modalLevel = document.getElementById("modalLevel");
    const modalDescription = document.getElementById("modalDescription");
    const modalFocus = document.getElementById("modalFocus");
    const modalDuration = document.getElementById("modalDuration");
    const modalFrequency = document.getElementById("modalFrequency");


    programButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            modalTitle.textContent = this.dataset.title;
            modalLevel.textContent = this.dataset.level;
            modalDescription.textContent = this.dataset.description;
            modalFocus.textContent = this.dataset.focus;
            modalDuration.textContent = this.dataset.duration;
            modalFrequency.textContent = this.dataset.frequency;

            programModal.classList.add("active");

        });

    });


    modalClose.addEventListener("click", function() {

        programModal.classList.remove("active");

    });


    programModal.addEventListener("click", function(event) {

        if (event.target === programModal) {

            programModal.classList.remove("active");

        }

    });

}


// =============================
// TRAINER MODAL
// =============================

const trainerModal = document.getElementById("trainerModal");

if (trainerModal) {

    const trainerButtons = document.querySelectorAll(".trainer-btn");

    const trainerModalClose = document.getElementById("trainerModalClose");

    const trainerModalName = document.getElementById("trainerModalName");

    const trainerModalRole = document.getElementById("trainerModalRole");

    const trainerModalDescription = document.getElementById("trainerModalDescription");

    const trainerModalExperience = document.getElementById("trainerModalExperience");

    const trainerModalSpecialty = document.getElementById("trainerModalSpecialty");


    trainerButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            trainerModalName.textContent = this.dataset.name;

            trainerModalRole.textContent = this.dataset.role;

            trainerModalDescription.textContent = this.dataset.description;

            trainerModalExperience.textContent = this.dataset.experience;

            trainerModalSpecialty.textContent = this.dataset.specialty;

            trainerModal.classList.add("active");

        });

    });


    trainerModalClose.addEventListener("click", function() {

        trainerModal.classList.remove("active");

    });


    trainerModal.addEventListener("click", function(event) {

        if (event.target === trainerModal) {

            trainerModal.classList.remove("active");

        }

    });

}


// =============================
// MEMBERSHIP MODAL
// =============================

const membershipModal = document.getElementById("membershipModal");

if (membershipModal) {

    const membershipButtons =
        document.querySelectorAll(".membership-btn");

    const membershipModalClose =
        document.getElementById("membershipModalClose");

    const membershipCancel =
        document.getElementById("membershipCancel");

    const selectedPlan =
        document.getElementById("selectedPlan");

    const selectedPrice =
        document.getElementById("selectedPrice");


    membershipButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            selectedPlan.textContent =
                this.dataset.plan;

            selectedPrice.textContent =
                this.dataset.price;

            membershipModal.classList.add("active");

        });

    });


    membershipModalClose.addEventListener("click", function() {

        membershipModal.classList.remove("active");

    });


    membershipCancel.addEventListener("click", function() {

        membershipModal.classList.remove("active");

    });


    membershipModal.addEventListener("click", function(event) {

        if (event.target === membershipModal) {

            membershipModal.classList.remove("active");

        }

    });

}

// =============================
// FITNESS CALCULATOR
// =============================

const fitnessForm = document.getElementById("fitnessForm");

if (fitnessForm) {

    fitnessForm.addEventListener("submit", function(event) {

        event.preventDefault();


        // GET USER INPUTS

        const age = Number(document.getElementById("age").value);

        const gender = document.getElementById("gender").value;

        const weight = Number(document.getElementById("weight").value);

        const height = Number(document.getElementById("height").value);

        const activity = Number(document.getElementById("activity").value);


        // =============================
        // BMI CALCULATION
        // =============================

        const heightInMeters = height / 100;

        const bmi = weight / (heightInMeters * heightInMeters);


        let bmiCategory;


        if (bmi < 18.5) {

            bmiCategory = "UNDERWEIGHT";

        }

        else if (bmi < 25) {

            bmiCategory = "HEALTHY RANGE";

        }

        else if (bmi < 30) {

            bmiCategory = "OVERWEIGHT";

        }

        else {

            bmiCategory = "OBESITY RANGE";

        }


        // =============================
        // BMR CALCULATION
        // =============================

        let bmr;


        if (gender === "male") {

            bmr =
                (10 * weight) +
                (6.25 * height) -
                (5 * age) +
                5;

        }

        else {

            bmr =
                (10 * weight) +
                (6.25 * height) -
                (5 * age) -
                161;

        }


        // =============================
        // DAILY CALORIE ESTIMATE
        // =============================

        const dailyCalories = bmr * activity;


        // =============================
        // DISPLAY RESULTS
        // =============================

        document.getElementById("bmiResult").textContent =
            bmi.toFixed(1);

        document.getElementById("bmiCategory").textContent =
            bmiCategory;

        document.getElementById("calorieResult").textContent =
            Math.round(dailyCalories);

        document.getElementById("calculatorNote").textContent =
            "These results are estimates and should be used as a general starting point rather than medical advice.";


        // SHOW RESULTS

        document
            .getElementById("calculatorResults")
            .classList.add("show");

    });

}

// =============================
// CONTACT FORM
// =============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    const contactStatus =
        document.getElementById("contactStatus");


    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("contactName").value.trim();

        const email =
            document.getElementById("contactEmail").value.trim();

        const subject =
            document.getElementById("contactSubject").value.trim();

        const message =
            document.getElementById("contactMessage").value.trim();


        // CHECK FOR EMPTY FIELDS

        if (!name || !email || !subject || !message) {

            contactStatus.textContent =
                "Please complete all fields.";

            contactStatus.classList.add("show");

            return;

        }


        // BASIC EMAIL CHECK

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            contactStatus.textContent =
                "Please enter a valid email address.";

            contactStatus.classList.add("show");

            return;

        }


        // SUCCESS MESSAGE

        contactStatus.textContent =
            `Thanks, ${name}! Your message has been received.`;

        contactStatus.classList.add("show");


        // CLEAR FORM

        contactForm.reset();

    });

}
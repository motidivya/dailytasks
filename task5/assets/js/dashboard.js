window.onload = ()=>{
    var navbarButtons = [];
    for(var i = 1; i<=5; i++){
        navbarButtons.push(document.querySelector(`.navigation p:nth-child(${i})`));
    }

    navbarButtons[0].addEventListener('click', ()=>{
        if(navbarButtons[0].hasAttribute('class') && navbarButtons[0].getAttribute('class') === 'active'){
            // navbarButtons[0].setAttribute('class', '');
        }else{
            navbarButtons[0].setAttribute('class', 'active');
            navbarButtons[1].setAttribute('class', '');
            navbarButtons[2].setAttribute('class', '');
            navbarButtons[3].setAttribute('class', '');
            navbarButtons[4].setAttribute('class', '');
        }
    });
    navbarButtons[1].addEventListener('click', ()=>{
        if(navbarButtons[1].hasAttribute('class') && navbarButtons[1].getAttribute('class') === 'active'){
            // navbarButtons[1].setAttribute('class', '');
        }else{
            navbarButtons[1].setAttribute('class', 'active');
            navbarButtons[0].setAttribute('class', '');
            navbarButtons[2].setAttribute('class', '');
            navbarButtons[3].setAttribute('class', '');
            navbarButtons[4].setAttribute('class', '');
        }
    });
    navbarButtons[2].addEventListener('click', ()=>{
        if(navbarButtons[2].hasAttribute('class') && navbarButtons[2].getAttribute('class') === 'active'){
            // navbarButtons[2].setAttribute('class', '');
        }else{
            navbarButtons[2].setAttribute('class', 'active');
            navbarButtons[1].setAttribute('class', '');
            navbarButtons[0].setAttribute('class', '');
            navbarButtons[3].setAttribute('class', '');
            navbarButtons[4].setAttribute('class', '');
        }
    });
    navbarButtons[3].addEventListener('click', ()=>{
        if(navbarButtons[3].hasAttribute('class') && navbarButtons[3].getAttribute('class') === 'active'){
            // navbarButtons[3].setAttribute('class', '');
        }else{
            navbarButtons[3].setAttribute('class', 'active');
            navbarButtons[1].setAttribute('class', '');
            navbarButtons[2].setAttribute('class', '');
            navbarButtons[0].setAttribute('class', '');
            navbarButtons[4].setAttribute('class', '');
        }
    });
    navbarButtons[4].addEventListener('click', ()=>{
        if(navbarButtons[4].hasAttribute('class') && navbarButtons[4].getAttribute('class') === 'active'){
            // navbarButtons[4].setAttribute('class', '');
        }else{
            navbarButtons[4].setAttribute('class', 'active');
            navbarButtons[1].setAttribute('class', '');
            navbarButtons[2].setAttribute('class', '');
            navbarButtons[3].setAttribute('class', '');
            navbarButtons[0].setAttribute('class', '');
        }
    });

    var bookButtons = [];
    for(var i = 1; i<=2; i++){
        bookButtons.push(document.querySelector(`.header-tab div:nth-child(${i})`));
    }

    bookButtons[0].addEventListener('click', ()=>{
        if(bookButtons[0].classList.contains('active-tab')){
            // bookButtons[0].classList.remove('active-tab');
        }else{
            bookButtons[0].classList.add('active-tab');
            bookButtons[1].classList.remove('active-tab');
        }
    });

    bookButtons[1].addEventListener('click', ()=>{
        if(bookButtons[1].classList.contains('active-tab')){
            // bookButtons[1].classList.remove('active-tab');
        }else{
            bookButtons[1].classList.add('active-tab');
            bookButtons[0].classList.remove('active-tab');
        }
    });

    // Data Population With JSON Starts

    const requestURL = '../../data.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = processData;

    function processData() {
        const data = request.response;
        const courses = data.courses;
        populateProjectsCardGrid(courses);
    }

    function populateProjectsCardGrid(courses) {
        const courseGrid = document.querySelector('.courses');
        if (courses.length > 0) {
            courses.forEach(course => {
                const item = createElement('div', courseGrid, classList="item");
                const expired = createElement('div', item, classList="expired");
                const p_expired = createElement('p', expired);
                if(course.expired){
                    p_expired.innerHTML = 'Expired'
                }

                const course_content = createElement('div', item, classList="course-content");
                const course_image = createElement('div', course_content, classList="course-image");
                const main_image = createElement('img',  course_image);
                main_image.setAttribute('src', course.image);
                main_image.setAttribute('alt', "Course1 Description image");

                const course_details = createElement('div', course_content, classList="course-details");
                const course_heading = createElement('div', course_details, classList="course-heading");
                const h3_course_heading = createElement('h3', course_heading);
                h3_course_heading.innerHTML = course.name;

                const img_course_heading = createElement('img', course_heading, classList="star");
                img_course_heading.setAttribute('src', 'assets/icons/favourite.svg');
                img_course_heading.setAttribute('alt', "Favourite Icon");

                const subject = createElement('div', course_details, classList='subject');
                const subject_name = createElement('p', subject);
                subject_name.innerHTML = course.subject.name;
                const subject_grade = createElement('p', subject);
                subject_grade.innerHTML = `Grade ${course.subject.grade}`;
                const subject_additional_marks = createElement('p', subject);
                subject_additional_marks.innerHTML = `+ ${course.subject.additional_points}`;

                const subject_details = createElement('div', course_details, classList='subject-details');
                const subject_details_units = createElement('p', subject_details);
                const subject_details_strong1 = createElement('strong', subject_details_units)
                subject_details_strong1.innerHTML = course.units;
                subject_details_units.innerHTML = `${course.units} Units`;
                
                const subject_details_lessons = createElement('p', subject_details);
                const subject_details_strong2 = createElement('strong', subject_details_lessons)
                subject_details_strong2.innerHTML = course.lessons;
                subject_details_lessons.innerHTML = `${course.lessons} Lessons`;

                const subject_details_topics = createElement('p', subject_details);
                const subject_details_strong3 = createElement('strong', subject_details_topics)
                subject_details_strong3.innerHTML = course.topics;
                subject_details_topics.innerHTML = `${course.topics} Topics`;

                const myclass = createElement('div', course_details, classList='class');
                const class_input = createElement('input', myclass)
                class_input.setAttribute('type', 'text');
                class_input.setAttribute('name', 'class');
                class_input.setAttribute('id', 'class');
                class_input.setAttribute('placeholder', 'No Classes');
                if(course.classes.length>0){
                    class_input.setAttribute('value', course.classes[0]);
                }

                const class_img = createElement('img', myclass);
                class_img.setAttribute('src', 'assets/icons/arrow-down.svg');
                class_img.setAttribute('alt', 'Arrow down icon');

                const class_details = createElement('div', course_details, classList='class-details');
                const class_details_p1 = createElement('p', class_details);
                if(course.students !== 0){
                    class_details_p1.innerHTML = `${course.students} Students`;
                }
                const class_details_p2 = createElement('p', class_details);
                if(course.start_date && course.end_date){
                    class_details_p2.innerHTML = `${course.start_date} - ${course.end_date}`;
                }

                const course_navigation = createElement('div', item, classList='course-navigation');
                const img1_course_navigation = createElement('img', course_navigation);
                img1_course_navigation.setAttribute('src', 'assets/icons/preview.svg');
                img1_course_navigation.setAttribute('alt', 'Preview Icon');
                if(course.preview){
                    // Do Nothing
                }else{
                    img1_course_navigation.setAttribute('class', 'disabled');
                }

                const img2_course_navigation = createElement('img', course_navigation);
                img2_course_navigation.setAttribute('src', 'assets/icons/manage-course.svg');
                img2_course_navigation.setAttribute('alt', 'Manage Course');
                if(course.manage){
                    // Do Nothing
                }else{
                    img2_course_navigation.setAttribute('class', 'disabled');
                }

                const img3_course_navigation = createElement('img', course_navigation);
                img3_course_navigation.setAttribute('src', 'assets/icons/grade-submissions.svg');
                img3_course_navigation.setAttribute('alt', 'Grade Submissions');
                if(course.grade_submissions){
                    // Do Nothing
                }else{
                    img3_course_navigation.setAttribute('class', 'disabled');
                }

                const img4_course_navigation = createElement('img', course_navigation);
                img4_course_navigation.setAttribute('src', 'assets/icons/reports.svg');
                img4_course_navigation.setAttribute('alt', 'Reports Icon');
                if(course.reports){
                    // Do Nothing
                }else{
                    img4_course_navigation.setAttribute('class', 'disabled');
                }
            });
        }
    }

    // createElement helper function
    function createElement(type, parent, classList) {
        const element = document.createElement(type);
        if (classList !== undefined) {
            typeof classList === 'Array' && classList.length > 0
                ? element.classList.add(...classList)
                : (element.className = classList);
        }

        parent.append(element);
        return element;
    }

    // Data Population With JSON Ends
}
    $(document).ready(function(){
        // بيانات المشاريع
        const projects = [
            {  image: "1.png" },
            {  image: "2.png" },
            {  image: "3.png" },
            {  image: "4.png" },
            {  image: "5.png" },
            {  image: "6.png" },
            {  image: "7.png" },
            {  image: "8.png" },
            { image: "9.png" }
        ];

        // إضافة المشاريع إلى الصفحة
        const projectCarousel = $('.project-carousel');
        projects.forEach(project => {
            const projectElement = $(`
                <div class="project">
                    
                    <img src="${project.image}" >
                </div>
            `);
            projectCarousel.append(projectElement);
        });

        // تفعيل Slick Carousel
        projectCarousel.slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            adaptiveHeight: true,
            rtl: true
        });

});

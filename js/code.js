/**
 * Created by Mist on 2016-06-13.
 */
$(function(){


    ////Resizing any photo to square
    //var photo = $('#photo');
    //var pw = photo.width();
    //photo.css('height',pw +'px');
    //$('.main-photo').css('height',pw +'px');

    var btn =$('.btn');
    var input = $('input');

    // Generating CV
    btn.on('click',function(e){
        e.preventDefault();

        //Header
        $('#main-name').html($('[data-name="main-name"]').val());
        $('#main-photo').attr('src',$('[data-name="main-photo"]').val());
        //Profile
        $('#address-1').html('<span class="glyphicon glyphicon-home">&nbsp</span>'+$('[data-name="address-1"]').val());
        $('#address-2').html('<span class="glyphicon">&nbsp</span>'+$('[data-name="address-2"]').val());
        $('#email').html('<span class="glyphicon glyphicon-envelope">&nbsp</span>'+$('[data-name="email"]').val());
        $('#mobile').html('<span class="glyphicon glyphicon-phone">&nbsp</span>'+$('[data-name="mobile"]').val());
        $('#birth-date').html('<span class="glyphicon glyphicon-user">&nbsp</span>'+$('[data-name="birth-date"]').val());
        //Profile
        $('#profile').html($('[data-name="profile"]').val());
        //Skills
        $('#skill-name-1').html($('[data-name="skill-name-1"]').val());
        $('#skill-bar-1').css('width',parseInt(($('[data-name="skill-bar-1"]').val()))+'%');
        $('#skill-name-2').html($('[data-name="skill-name-2"]').val());
        $('#skill-bar-2').css('width',parseInt(($('[data-name="skill-bar-2"]').val()))+'%');
        $('#skill-name-3').html($('[data-name="skill-name-3"]').val());
        $('#skill-bar-3').css('width',parseInt(($('[data-name="skill-bar-3"]').val()))+'%');
        $('#skill-name-4').html($('[data-name="skill-name-4"]').val());
        $('#skill-bar-4').css('width',parseInt(($('[data-name="skill-bar-4"]').val()))+'%');
        $('#skill-name-5').html($('[data-name="skill-name-5"]').val());
        $('#skill-bar-5').css('width',parseInt(($('[data-name="skill-bar-5"]').val()))+'%');
        $('#skill-name-6').html($('[data-name="skill-name-6"]').val());
        $('#skill-bar-6').css('width',parseInt(($('[data-name="skill-bar-6"]').val()))+'%');
        //Languages
        $('#language-name-1').html($('[data-name="language-name-1"]').val());
        $('#language-bar-1').css('width',parseInt(($('[data-name="language-bar-1"]').val()))+'%');
        $('#language-name-2').html($('[data-name="language-name-2"]').val());
        $('#language-bar-2').css('width',parseInt(($('[data-name="language-bar-2"]').val()))+'%');
        $('#language-name-3').html($('[data-name="language-name-3"]').val());
        $('#language-bar-3').css('width',parseInt(($('[data-name="language-bar-3"]').val()))+'%');
        $('#language-name-4').html($('[data-name="language-name-4"]').val());
        $('#language-bar-4').css('width',parseInt(($('[data-name="language-bar-4"]').val()))+'%');
        //Interests
        $('#interests-name-1').html($('[data-name="interests-name-1"]').val());
        $('#interests-name-2').html($('[data-name="interests-name-2"]').val());
        $('#interests-name-3').html($('[data-name="interests-name-3"]').val());
        $('#interests-name-4').html($('[data-name="interests-name-4"]').val());
        //Experience
        $('#job-name-1').html($('[data-name="job-name-1"]').val());
        $('#job-date-1').html($('[data-name="job-company-1"]').val()+', '+$('[data-name="job-place-1"]').val()+' | '+$('[data-name="job-date-1"]').val());
        $('#job-info-1').html($('[data-name="job-info-1"]').val());
        $('#job-name-2').html($('[data-name="job-name-2"]').val());
        $('#job-date-2').html($('[data-name="job-company-2"]').val()+', '+$('[data-name="job-place-2"]').val()+' | '+$('[data-name="job-date-2"]').val());
        $('#job-info-2').html($('[data-name="job-info-2"]').val());
        $('#job-name-3').html($('[data-name="job-name-3"]').val());
        $('#job-date-3').html($('[data-name="job-company-3"]').val()+', '+$('[data-name="job-place-3"]').val()+' | '+$('[data-name="job-date-3"]').val());
        $('#job-info-3').html($('[data-name="job-info-3"]').val());
        $('#job-name-4').html($('[data-name="job-name-4"]').val());
        $('#job-date-4').html($('[data-name="job-company-4"]').val()+', '+$('[data-name="job-place-4"]').val()+' | '+$('[data-name="job-date-4"]').val());
        $('#job-info-4').html($('[data-name="job-info-4"]').val());
        $('#job-name-5').html($('[data-name="job-name-5"]').val());
        $('#job-date-5').html($('[data-name="job-company-5"]').val()+', '+$('[data-name="job-place-5"]').val()+' | '+$('[data-name="job-date-5"]').val());
        $('#job-info-5').html($('[data-name="job-info-5"]').val());
        //Education
        $('#school-name-1').html($('[data-name="school-name-1"]').val());
        $('#school-date-1').html($('[data-name="school-place-1"]').val()+' | '+$('[data-name="school-date-1"]').val());
        $('#school-info-1').html($('[data-name="school-info-1"]').val());
        $('#school-name-2').html($('[data-name="school-name-2"]').val());
        $('#school-date-2').html($('[data-name="school-place-2"]').val()+' | '+$('[data-name="school-date-2"]').val());
        $('#school-info-2').html($('[data-name="school-info-2"]').val());
        $('#school-name-3').html($('[data-name="school-name-3"]').val());
        $('#school-date-3').html($('[data-name="school-place-3"]').val()+' | '+$('[data-name="school-date-3"]').val());
        $('#school-info-3').html($('[data-name="school-info-3"]').val());
        //Courses
        $('#course-name-1').html($('[data-name="course-name-1"]').val());
        $('#course-date-1').html($('[data-name="course-place-1"]').val()+' | '+$('[data-name="course-date-1"]').val());
        $('#course-name-2').html($('[data-name="course-name-2"]').val());
        $('#course-date-2').html($('[data-name="course-place-2"]').val()+' | '+$('[data-name="course-date-2"]').val());
        $('#course-name-3').html($('[data-name="course-name-3"]').val());
        $('#course-date-3').html($('[data-name="course-place-3"]').val()+' | '+$('[data-name="course-date-3"]').val());
        $('#course-name-4').html($('[data-name="course-name-4"]').val());
        $('#course-date-4').html($('[data-name="course-place-4"]').val()+' | '+$('[data-name="course-date-4"]').val());
        $('#course-name-5').html($('[data-name="course-name-5"]').val());
        $('#course-date-5').html($('[data-name="course-place-5"]').val()+' | '+$('[data-name="course-date-5"]').val());




                //Hiding instructions and generator section
                $('.generator-instruction').addClass('hidden');
                $('.generator-form').addClass('hidden');

                // Showing generated CV
                $('.cv').removeClass('hidden');

                // Removing empty empty bars
                var pb = $('.progress-bar');
                pb.each(function(){
                    if ($(this).css('width')=='0px'){
                        $(this).parent().parent().parent().addClass('hidden');
                    }
                });
                //Removing empty lines in experience, education & courses
                var xs = $('.experience-subtitle');
                xs.each(function(){
                    if ($(this).html()==',  | ' || $(this).html()==' | '){
                        $(this).addClass('hidden');
                    }
                });






    });


});
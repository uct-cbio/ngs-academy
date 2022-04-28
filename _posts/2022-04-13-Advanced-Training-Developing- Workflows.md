---
layout: default
title:  "Advanced Training: Developing Workflows"
date: 2022-04-13
main_menu: courses
permalink: /:year/:title
category: upcoming
course_overview : High-throughput laboratory machines generate large quantities of raw biological data.  Processing the data to generate useful information involves using several tools and sometimes setting up complex bioinformatics analysis environments across heterogeneous computing devices. Bioinformatics workflows and workflow managers allow reproducibility and portability of analysis plans and optimization of available computing resources.  We would like to develop and run an advanced  bioinformatics workflow workshop  aimed at introducing and deploying Nextflow, a tool that enables scalable and reproducible scientific workflows. 
start_date: 2022-04-25
end_date: 2022-04-29
group: group1
---
  
<!-- ### SARS-CoV-2 NGS bioinformatics course 2021 -->
The NGS Academy forms part of the Africa CDC Pathogen Genomics Initiative (PGI). This initiative is funded by the Bill & Melinda Gates Foundation. Our training initiatives are carried out in partnership with the African Society for Laboratory Medicine (ASLM).
<hr>

<!-- <b>Course outline:</b> [ SARS-CoV-2 NGS Bioinformatics Course 2021]({{ site.url }}/docs/course_outline.pdf) -->

<p align="left"><b >Course overview:</b></p>

 <p align="left">High-throughput laboratory machines generate large quantities of raw biological data. Processing the data to generate useful information involves using several tools and sometimes setting up complex bioinformatics analysis environments across heterogeneous computing devices. Bioinformatics workflows and workflow managers allow reproducibility and portability of analysis plans and optimization of available computing resources. We would like to develop and run an advanced bioinformatics workflow workshop aimed at introducing and deploying Nextflow, a tool that enables scalable and reproducible scientific workflows.   
 <p>


<p align="left"><b class="text-left">Intended audience:</b></p>

<p>Beginner - Intermediate  level  Bioinformaticians working with next-generation sequencing data in East-Africa.
</p>

<b>Pre-requisite:</b> 

<ol>
<li>For the course, participants do not need a high-performance computer since the trainers will provide access to KEMRI's cluster
</li>
<!-- test -->
<p>The course will cover:</p>

<div class="row">
    <div class="col-sm-2">
        <div><img alt="..." src="/ngs-academy/img/nextflow.png" width="100%" />
            <!-- <p class="small"> Source: CBIO UCT</p> -->
        </div>
    </div>
    <div class="col-sm-2">
        <div><img alt="..." src="/ngs-academy/img/docker.png" width="100%" />
            <!-- <p class="small"> Source: CBIO UCT</p> -->
        </div>
    </div>
    <div class="col-sm-2">
        <div><img alt="..." src="/ngs-academy/img/git.png" width="100%" />
            <!-- <p class="small"> Source: CBIO UCT</p> -->
        </div>
    </div>
    <div class="col-sm-2">
        <div><img alt="..." src="/ngs-academy/img/HPC.jpg" width="100%" />
            <!-- <p class="small"> Source: CBIO UCT</p> -->
        </div>
    </div>
         <div class="col-sm-2">
        <div><img alt="..." src="/ngs-academy/img/snakemake.png" width="100%" />
            <!-- <p class="small"> Source: CBIO UCT</p> -->
        </div>
    </div>

</div>


<h3>Logistics: </h3>
<hr>

<ol class="list-unstyled">

 <li><b>Venue of course</b>: KEMRI / WELLCOME TRUST Kilifi, Kenya  </li>


<li><b>Dates for the course:</b> 25-29 April 2022</li>


<!-- <li><b>Course sponsors</b>: TBA</li> -->

<!-- <u><li><b>Participant applications</b></li></u>

<li><b>Registration for participants opened:</b> 25 Feb 2022</li> -->

<!-- <li><b>Registration for participants closed:</b> 04 March 2022</li> -->

<!-- <li><b>Notification date for successful Applicants:</b> </li> -->
</ol>

<b>Course curriculum:</b>
<hr>
<ol class="list-unstyled">

<li>Day 1 HPC and introduction to containers </li>
<li>Day 2 Introduction to git and file organisation</li>
<li>Day 3 Introduction to snakemake</li>
<li>Day 4 Advanced workflows (Nextflow, CWL) </li>
<li>Day 5 Practical application </li>

</ol>


<h3>Course schedule and Materials:</h3>


<ul class="nav nav-tabs" role="tablist">
	<li class="nav-item">
		<a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Mon 25 April 2022</a>
	</li>
	<li class="nav-item">
		<a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Tues 26 April 2022</a>
	</li>
	<li class="nav-item">
		<a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Wed 27 April 2022</a>
	</li>
 
  	<li class="nav-item">
		<a class="nav-link" data-toggle="tab" href="#tabs-4" role="tab">Thur 28 April 2022</a>
	</li>

<!-- 
   	<li class="nav-item">
		<a class="nav-link" data-toggle="tab" href="#tabs-5" role="tab">Fri 29 April 2022</a>
	</li>
-->
  
</ul><!-- Tab panes -->
<div class="tab-content">
	<div class="tab-pane active" id="tabs-1" role="tabpanel">
		<p>   <table class="table table-bordered table-responsive">
  <thead>
    <tr>
      <th scope="col">Session</th>
      <th scope="col">Course materials</th>
      <th scope="col">Training partner</th>
       <th scope="col">Interactive Sessions with Instructor/s</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">9:00am - 10:00am 
      <br>
     </th>
      <td>    <ul>
      <li><b> Get setup working on the HPC set-up</b></li>
<ol>
  <li>1. Draw Scientific Journey (Includes your current needs for intermediate/advanced training)</li>
  <li>1.1 Get setup working on HPC</li>
</ol>                 
</ul></td>
      <td><ul>
  
  <li>Malawi-Liverpool-Wellcome Trust </li>

 <li>KEMRI </li>
 
</ul></td>
            <td><ul>
             <li>Dr Philip Ashton</li>
              <li>Dr George Githinji</li>
</ul></td>
    </tr>
  <tr>
      <th scope="row">10:30am - 1:00pm
      <br>
     </th>
      <td>    <ul>
      <li>2. <a href="{{ site.url }}uploads/Cond_and_Conda_environments.pdf" target="_blank">Introduction to conda and conda environments.</a></li>
<ol>
  <li>2.1 Miniconda Installation</li>
  <li>2.2 Use of mamba</li>
    <li>2.3 Conda environments</li>
     <li>2.4 Different ways of specifying (cmd line, yaml file)</li>
       <li>2.5 Ways of saving/exporting/sharing</li>
</ol>                 
</ul></td>
      <td><ul>
  
  <li>Malawi-Liverpool-Wellcome Trust </li>
 <li>KEMRI </li>

 
</ul></td>
            <td><ul>
             <li>Dr Philip Ashton</li>
              <li>Dr George Githinji</li>
</ul></td>
    </tr>
  <tr>
      <th scope="row">2:00pm - 4:00pm
      <br>
     </th>
      <td>    <ul>
        <li> <a href="#" target="_blank">Introduction to Containers.</a></li>
<ol>
  <li>3. Introduction to docker</li>
  <li>3.1 Finding and rolling out containers</li>
   <li>3.2 Run docker</li>
    <li>3.3 Build a docker container</li>
    <li>3.4 Modifying a docker container</li>
     <li>3.5 Theory session on Singularity, similarities and differences with docker</li>
</ol>                 
</ul></td>
      <td><ul>
  
  <li>Malawi-Liverpool-Wellcome Trust </li>
   <li>KEMRI </li>


 
</ul></td>
            <td><ul>
             <li>Dr Philip Ashton</li>
              <li>Dr George Githinji</li>
</ul></td>
    </tr>
    
  </tbody>
</table>    </p>
	</div>
	<div class="tab-pane" id="tabs-2" role="tabpanel">
		<p> <table class="table table-bordered table-responsive">
  <thead>
    <tr>
      <th scope="col">Session</th>
      <th scope="col">Course materials</th>
      <th scope="col">Training partner</th>
       <th scope="col">Interactive Sessions with Instructor/s</th>
    </tr>
  </thead>
  <tbody>

  <tr>
      <th scope="row">9:00am - 10:00am
      <br>
     </th>
      <td>    <ul>
      <li>1. Recap from yesterday </li>
      <li>1.1 Introduction to docker mounts and volumes </li>
<li>1.2 Working with volumes and
persisting data</li>
        <li>1.3 Introduction to singularity</li>
<ol>
 
 
</ol>                 
</ul></td>
      <td><ul>
  
  <li>Malawi-Liverpool-Wellcome Trust </li>

 <li>KEMRI </li>
 
</ul></td>
            <td><ul>
             <li>Dr Philip Ashton</li>
              <li>Dr George Githinji</li>
</ul></td>
    </tr>

 <tr>
      <th scope="row">10:30am - 1:00pm
      <br>
     </th>
      <td>    <ul>
      <li>2. Introduction to Git</li> 
       <li>2.1  Software carpentry (<a href="https://verena90.github.io/2021-10-05-online-NGS_Academy/" target="_blank">Basic Unix and Git</a>)</li> 
                      
</ul></td>
      <td><ul>
  
  <li>Malawi-Liverpool-Wellcome Trust </li>

 <li>KEMRI </li>
 
</ul></td>
            <td><ul>
             <li>Dr Philip Ashton</li>
              <li>Dr George Githinji</li>
</ul></td>
    </tr>
    <tr>
      <th scope="row">
      <br>
      2:00pm - 3:00pm</th>
      <td>    <ul>
             <li>3. File organisation.</li>
                
</ul></td>
      <td><ul>
  
  <li>KEMRI</li>
 
 
</ul></td>
            <td> <ul>
            
  <li>Dr George Githinji</li>
    
</ul></td>
    </tr>
    
  </tbody>
</table>  
</p>
	</div>
	<div class="tab-pane" id="tabs-3" role="tabpanel">
		<p>   <table class="table table-bordered table-responsive">
  <thead>
    <tr>
      <th scope="col">Session</th>
      <th scope="col">Course materials</th>
      <th scope="col">Training partner</th>
       <th scope="col">Interactive Sessions with Instructor/s</th>
    </tr>
  </thead>
  <tbody>
   
  <tr>
      <th scope="row">9:00am - 1:00pm
      <br>
     </th>
      <td>    <ul>
      <li>1. Introduction to Snakemake </li>
      <li>1.1 Scripting </li>
<li>1.2 Basic concerpts</li>
        <li>1.3 Running a basic pipeline</li>
          <li>1.4 Configurations</li>
<ol>
 
 
</ol>                 
</ul></td>
      <td><ul>
  
  <li>Malawi-Liverpool-Wellcome Trust </li>

 <li>KEMRI </li>
 
</ul></td>
            <td><ul>
             <li>Dr Philip Ashton</li>
              <li>Dr George Githinji</li>
</ul></td>
    </tr>
    <tr>
      <th scope="row">
      <br>
      2:00pm - 4:00pm</th>
      <td>    <ul>
             <li>2. Running snakemake.</li>
                  <li>2.1 Run snakemake with conda</li>
                    <li>2.2 Running snakemake on HPC</li>
</ul></td>
      <td><ul>
   <li>Malawi-Liverpool-Wellcome Trust </li>
  <li>KEMRI</li>
 
 
</ul></td>
            <td> <ul>
            
  <li>Dr Philip Ashton</li>
   <li>Dr George Githinji</li>
    
</ul></td>
    </tr>
  </tbody>
</table>  </p>
	</div>

  	<div class="tab-pane" id="tabs-4" role="tabpanel">
		<p> <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Session</th>
      <th scope="col">Course materials</th>
      <th scope="col">Training partner</th>
       <th scope="col">Interactive Sessions with Instructor/s</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">9:00am - 10:00am 
      <br>
     </th>
      <td>    <ul>
      <li>1. Running Snakemate cont...</li>                
</ul></td>
      <td><ul>
  
  <li>ILRI </li>

 <li>KEMRI </li>
 
</ul></td>
            <td><ul>
             <li>John Juma</li>
              <li>Dr George Githinji</li>
</ul></td>
    </tr>
  <tr>
      <th scope="row">10:30am - 1:00pm
      <br>
     </th>
      <td>    <ul>
      <li>2. Sharing pipelines</li>
                
</ul></td>
      <td><ul>
  
  <li>Malawi-Liverpool-Wellcome Trust </li>
 <li>KEMRI </li>

 
</ul></td>
            <td><ul>
             <li>Dr Philip Ashton</li>
              <li>Dr George Githinji</li>
</ul></td>
    </tr>
  <tr>
      <th scope="row">2:00pm - 4:00pm
      <br>
     </th>
      <td>    <ul>
        <li> <a href="#" target="_blank">Introduction to Containers.</a></li>
<ol>
  <li>3. Advanced workflows (Nextflow and Common Workflow Language)</li>
  <li>3.1 Compare and contrast with Snakemake</li>
   <li>3.2 Simple worklfows</li>
    <li>3.3 Using docker in worklfows</li>
    <li>3.4 Using HPC</li>
     <li>3.5 Introduction to Common Workflow language (CWL)</li>
</ol>                 
</ul></td>
      <td><ul>
  
  <li>Malawi-Liverpool-Wellcome Trust </li>
   <li>KEMRI </li>


 
</ul></td>
            <td><ul>
             <li>Dr Philip Ashton</li>
              <li>Dr George Githinji</li>
</ul></td>
    </tr>
    
    
  </tbody>
</table>  </p>
	</div>
    	<div class="tab-pane" id="tabs-5" role="tabpanel">
		<p> <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Session</th>
      <th scope="col">Course materials</th>
      <th scope="col">Training partner</th>
       <th scope="col">Interactive Sessions with Instructor/s</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AM-PM session
      <br>
     </th>
      <td>    <ul>
                 <li> Practical project on implementing your own workflow</li>
               <ol>
<li>1. Provide 3/4/5 datasets and desired workflows and divide the participants into groups to work on those.</li> 
</ol>
                
</ul></td>
      <td><ul>
  
  <li>KEMRI</li>

 <li>Malawi-Liverpool-Wellcome Trust</li>
 
</ul></td>
            <td><ul>
             <li>Dr George Githinji</li>
  <li>Dr Philip Ashton</li>
   
</ul></td>
    </tr>
   
    
  </tbody>
</table>  </p>
	</div>
</div>
const removeSymbols = function(strings){
  return strings.split(" ").join(".").split(":").join(".").split(".").join("-");
}



const LinksProject = {
    itch: ''
}

const ProjectInfo = function(title, image, description, links){
    this.title = title || "Project Title";
    this.image = image || "http://lorempixel.com/500/200";
    this.description = description || "A game made with love for me.";
    this.links = links;
}



const newModal = function(project){
    let htmlStruct = '';
    const titleLink = removeSymbols(project.title);
    htmlStruct += '<div class="modal fade" id="' + titleLink + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">';
    htmlStruct += '    <div class="modal-dialog" role="document">';
    htmlStruct += '      <div class="modal-content bg-color-dark-zone border-1">';
    htmlStruct += '        <div class="modal-header border-1-dw">';
    htmlStruct += '          <h5 class="modal-title" id="exampleModalLongTitle">' + project.title + '</h5>';
    htmlStruct += '          <button type="button" class="close" data-dismiss="modal" aria-label="Close">';
    htmlStruct += '            <span aria-hidden="true">&times;</span>';
    htmlStruct += '          </button>';
    htmlStruct += '        </div>';
    htmlStruct += '        <div class="modal-body">';
    htmlStruct += '            <img src="' + project.image + '" class="img-responsive col-md-12">';
    htmlStruct += '                <p>'+ project.description+'<p>';
    htmlStruct += '                <p><a href="'+project.links.itch+'"><i class="btnLink fa fa-gamepad"></i></a><p></p>';
    htmlStruct += '        </div>';
    htmlStruct += '      </div>';
    htmlStruct += '    </div>';
    htmlStruct += '  </div>';
    return htmlStruct;
}


const newArticle = function(size, project){
    let htmlStruct = '';
    const titleLink = removeSymbols(project.title);
    htmlStruct += '<!-- project -->';
    htmlStruct += '<article class="project -biggest col-md-'+size+' fg-link-color-light" style="background-image: url('+project.image+')" data-toggle="modal" data-target="#'+titleLink+'">';
    htmlStruct += '    <div class="description hidden-sm-down">';
    htmlStruct += '        <time class="datetime" datetime="27 fev 2017"></time>';
    htmlStruct += '        <h3 class="title">'+project.title+'</h3>';
    htmlStruct += '    </div>';
    htmlStruct += '    <div class="mobile-description hidden-md-up"  data-toggle="modal" data-target="#'+titleLink+'">';
    htmlStruct += '        <time class="datetime" datetime="27 fev 2017"></time>';
    htmlStruct += '        <h3 class="title">'+project.title+'</h3>';
    htmlStruct += '    </div>';
    htmlStruct += '</article>';
    htmlStruct += '<!-- / project -->';
    return htmlStruct;
}
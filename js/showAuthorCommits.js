import $ from "jquery"

export default function(author){
    var commits = commitsByAuthor[author]

    $("h2#commits-by-author").html("Commits by " + author)

    var commitList = "<ul>"
    commits.forEach(function(commit){
        commitList += "<li>" + commit.message + "</li>"
    })
    commitList += "</ul>"
    console.log(author)

    $("#commits").html(commitList)
}
import $ from "jquery"
import showAuthorCommits from "./showAuthorCommits"
import {mapObject, forEachProperty} from "./utils"

export default function(commitsByAuthor){
    var commitCountByAuthor = mapObject(commitsByAuthor, function(commits){
        return commits.length
    })

    var userTable = "<table>"
    userTable += "<tr>"
        userTable += "<th>Author</th>"
        userTable += "<th>Commits</th>"
    userTable += "</tr>"
    forEachProperty(commitCountByAuthor, function(author, commitCount){
        userTable += "<tr data-author=\"" + author + "\">"
            userTable += "<td>" + author + "</td>"
            userTable += "<td>" + commitCount + "</td>"
        userTable += "</tr>"
    })
    userTable += "</table>"

    $("#authors").html(userTable)
}

$("body").on("click", "#authors tr", function(){
    var author = $(this).data("author")
    if (author === undefined) {
        return // clicked on table header
    } 

    showAuthorCommits(author)
})


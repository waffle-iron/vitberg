/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Meteor.startup(function () {

    Categories.remove({});
    SubCategories.remove({});
    News.remove({});

    for(var i=0;i<7;i++){
        var text = "Category" + ' ' + i;
        var id = Categories.insert({name:text});
        for(var j=0;j<7;j++){
            var text2 = "SubCategory" + ' ' + j;
            SubCategories.insert({categoryId:id,name:text2});
        }
    }
    user = Accounts.createUser({
        username: 'user',
        email: 'user@onebi.eu',
        password: 'useronebi'
    })

    for(var i=0;i<10;i++){
        News.insert({text:'Tekst aktualności ' + i, authorId:user, date:new Date()})

    }




})
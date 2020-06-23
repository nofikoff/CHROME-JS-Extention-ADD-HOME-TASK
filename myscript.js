// content.js
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action_hometask") {


            // второй раз не срабатываем  копию самого сея запрещаем!
            // второй раз не срабатываем  копию самого сея запрещаем!
            // второй раз не срабатываем  копию самого сея запрещаем!
            if (typeof myModal !== "undefined") return;

            // дата текущей пары из локалсториджа
            // дата текущей пары из локалсториджа
            // дата текущей пары из локалсториджа
            var myPromise = new Promise((resolve) => {

                console.log("ПЕРВЫЙ ПРОМИС");
                console.log("ПЕРВЫЙ ПРОМИС");
                console.log("ПЕРВЫЙ ПРОМИС");
                console.log(typeof localStorage["app.cur_spec_pr"]);


                // НАЗВАНИЕ ПАРЫ
                // НАЗВАНИЕ ПАРЫ
                // НАЗВАНИЕ ПАРЫ

                if (
                    typeof localStorage["app.cur_spec_pr"] !== 'undefined'


                ) {
                    console.log("Ура вижу локал сторидж", localStorage["app.cur_spec_pr"]);
                    resolve();

                } else {

                    alert("ПЛАГИН ДЗ: Не вижу текущую группу и тему - Просьба указать");
                    //
                    fetch("https://logbook.itstep.org/homework/get-group-spec", {
                        "headers": {
                            "accept": "application/json, text/plain, */*",
                            "accept-language": "en-UA,en;q=0.9,ru-AU;q=0.8,ru;q=0.7,en-US;q=0.6",
                            "cache-control": "no-cache",
                            "content-type": "application/json;charset=UTF-8",
                            "id-local-hash": "null",
                            "pragma": "no-cache",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin"
                        },
                        "referrer": "https://logbook.itstep.org/",
                        "referrerPolicy": "no-referrer-when-downgrade",
                        "body": "{\"type\":0}",
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "include"
                    })
                        .then((response) => response.json())
                        .then((mysource) => {
                            // пишем в локал сторидж
                            // ролдителя кокаем
                            // ролдителя кокаем
                            // ролдителя кокаем
                            // ролдителя кокаем
                            // ролдителя кокаем

                            console.log(mysource);


                            //var myjson = '{"groups_spec":{"2364":{"data":[{"id_tgroups":"2364","id_spec":"195","name_tgroups":"SunPM821","name_spec":"Язык сценариев Javascript и библиотека jQuery","order":"18226"},{"id_tgroups":"2364","id_spec":"339","name_tgroups":"SunPM821","name_spec":"Системное программирование","order":"20526"},{"id_tgroups":"2364","id_spec":"340","name_tgroups":"SunPM821","name_spec":"Сетевое программирование","order":"25732"},{"id_tgroups":"2364","id_spec":"376","name_tgroups":"SunPM821","name_spec":"Управление программными проектами","order":"11177"}],"name_tgroups":"SunPM821","id_tgroups":"2364","order":"25732"},"2375":{"data":[{"id_tgroups":"2375","id_spec":"171","name_tgroups":"PE711","name_spec":"Разработка веб-приложений с использованием ASP.NET та AJAX","order":"23693"},{"id_tgroups":"2375","id_spec":"256","name_tgroups":"PE711","name_spec":"Системное программирование","order":"8278"},{"id_tgroups":"2375","id_spec":"257","name_tgroups":"PE711","name_spec":"Сетевое программирование","order":"9461"},{"id_tgroups":"2375","id_spec":"258","name_tgroups":"PE711","name_spec":"Управление программными проектами","order":"10946"},{"id_tgroups":"2375","id_spec":"372","name_tgroups":"PE711","name_spec":"Курсовой проект по .NET Framework","order":"25488"},{"id_tgroups":"2375","id_spec":"373","name_tgroups":"PE711","name_spec":"Командный проект","order":"13106"}],"name_tgroups":"PE711","id_tgroups":"2375","order":"25488"},"2472":{"data":[{"id_tgroups":"2472","id_spec":"166","name_tgroups":"PE811","name_spec":"Разработка веб-страниц на языке разметки HTML5 с использованием каскадных таблиц стилей CSS3","order":"20739"},{"id_tgroups":"2472","id_spec":"173","name_tgroups":"PE811","name_spec":"Язык сценариев Javascript та библиотека jQueri","order":"25972"}],"name_tgroups":"PE811","id_tgroups":"2472","order":"25972"},"2473":{"data":[{"id_tgroups":"2473","id_spec":"166","name_tgroups":"PA812","name_spec":"Разработка веб-страниц на языке разметки HTML5 с использованием каскадных таблиц стилей CSS3","order":"20736"},{"id_tgroups":"2473","id_spec":"173","name_tgroups":"PA812","name_spec":"Язык сценариев Javascript та библиотека jQueri","order":"25431"},{"id_tgroups":"2473","id_spec":"256","name_tgroups":"PA812","name_spec":"Системное программирование","order":"25960"}],"name_tgroups":"PA812","id_tgroups":"2473","order":"25960"},"2876":{"data":[{"id_tgroups":"2876","id_spec":"417","name_tgroups":"FE92","name_spec":"Разработка клиентских сценариев с использованием JavaScript","order":"26104"}],"name_tgroups":"FE92","id_tgroups":"2876","order":"26104"}},"limit":10}';
                            //var mysource = JSON.parse(myjson);
                            // дропдаун ГРУППА
                            // дропдаун ГРУППА
                            let groupDropdown = `<select id = "mygroup"><option value = "">- = -</option>`;
                            console.log(mysource.groups_spec);
                            Object.entries(mysource.groups_spec).forEach(([i, v]) => {
                                console.log(v);
                                groupDropdown += `<option value = "${i}">${v.name_tgroups}</option>`;
                            });
                            groupDropdown += '</select>';


                            // модальное окно
                            document.querySelector("body").innerHTML += `<div id="myModal" class="mymodal">
<div class="mymodal-content">
<!--      <span class="myclose">&times;</span>-->
ГРУППА:
    <div>${groupDropdown}</div><br>
    
    <div id="div_myspec"></div><br>
    
    
    <br><br><button id="getNewGroup">-= выбрать =-</button></p>
  </div>
</div>`;

                            // var span = document.getElementsByClassName("myclose")[0];
                            // span.onclick = function () {
                            //     reject();
                            //     myModal.remove();
                            // };
                            //
                            getNewGroup.addEventListener("click", () => {
                                resolve();
                                myModal.remove();
                            });

                            mygroup.addEventListener('change', (event) => {
                                // дропдаун предмет
                                // дропдаун предмет
                                // дропдаун предмет
                                div_myspec.innerHTML = "ПРЕДМЕТ:";

                                console.log()
                                let group_id = event.target.value;
                                let specDropdown = `<select id = "myspec"><option value = "">- = -</option>`;
                                Object.entries(mysource.groups_spec[group_id].data).forEach(([i, v]) => {
                                    specDropdown += `<option value = "${mysource.groups_spec[group_id].data[i].id_spec}">${v.name_spec}</option>`;
                                });
                                specDropdown += '</select>';
                                div_myspec.innerHTML += specDropdown;

                                // обработчик
                                myspec.addEventListener('change', (event) => {
                                    localStorage["app.cur_lenta_pr"] = 7;
                                    localStorage["app.cur_spec_pr"] = JSON.stringify({
                                        name_spec: event.target.options[event.target.selectedIndex].text,
                                        id_spec: event.target.value
                                    });
                                    localStorage["app.cur_group_pr"] = group_id;
                                });
                            });


                            //throw ("ПЛАГИН ДЗ: Не вижу текщую группу и тему");
                        })
                        .then(() => {
                            console.log(localStorage["app.cur_spec_pr"]);
                            //resolve();
                        })
                        .catch(() => {
                                alert("Какойто сбой - Пара не выбрана");

                            }
                        )


                }//catch название пары

            })
                .then(() => {


                    if (typeof localStorage["app.cur_date_pr"] === 'undefined') {
                        localStorage["app.cur_date_pr"] = formatDate(new Date());
                    }

                    var curdate = localStorage["app.cur_date_pr"].replace(/["']/g, "");
                    var curspecname = JSON.parse(localStorage["app.cur_spec_pr"]).name_spec;

                    console.log("ВТОРОЙ ПРОМИС");
                    // дропдаун меню с текущей номером пары
                    // дропдаун меню с текущей номером пары
                    // дропдаун меню с текущей номером пары
                    let lentaDropdown = `<select id = "lenta">`;
                    let nowLenta = parseInt(JSON.parse(localStorage["app.cur_lenta_pr"]));
                    for (var i = 1; i <= 10; i++) {
                        let selected = (i == nowLenta) ? 'selected' : '';

                        lentaDropdown += `<option value = "${i}" ${selected}>${i}</option>`;
                    }
                    lentaDropdown += '</select>';

                    // ФОРМА ПЛАГИНА
                    // ФОРМА ПЛАГИНА
                    // ФОРМА ПЛАГИНА
                    document.querySelector("body").innerHTML += `<div id="myModal" class="mymodal">
  <div class="mymodal-content">
    <span class="myclose">&times;</span>
    <p>Отправить домашку для пары №${lentaDropdown} / 
    
    <input type="text" id="curdate_input" value="${curdate}">
    
    <br><h1 class="myh1">${curspecname}</h1></p>
    <p>
    Название ДЗ<input type="text" id="tema" value="тема" > 
Текст ДЗ <br><textarea id="myTask">
описание</textarea>
    
    <br><br><button id="getTask">-= отправить =-</button></p>
    <p><hr><h1 class="myh1">Примечание:</h1><br>
    - если вызвать плагин в ПРИСУСТВУЮЩИЕ - группа выбирается автоматом<br> 
    - если вызвать плагин в любой другой части Logbook - группу и предмет выбираем в ручную<br> 
    - можно выбрать любую дату в прошлом или будущем + произвольный номер пары 0-9 для задания ДЗ<br> 
    - дедлайн рассчитывается автоматом + 2 недели <br> 
    - сопровождающая картинка берется дефолтная <br>
    - удаление домашек НЕ реализовано по техническим причинам<br>
    - плагин полностью безопасен и использует текущую авторизацию преподавателя в logbook<br>
    

    </p>
  </div>
</div>`;

                    var keyToken = "";
                    getTask.addEventListener('click', () => {

                        //получаем key file
                        load("https://logbook.itstep.org/auth/get-upload-token",
                            "",
                            e => {
                                console.log(JSON.parse(e));
                                keyToken = JSON.parse(e).token;

                                // текст домашки в массив
                                let textArray = myTask.value.split(/\r?\n/);
                                // воостанавливаем
                                textArray = textArray.map((line) => `${line}\r\n`);

                                // форма аплоуда файла
                                let formData = new FormData();
                                let file = new File(textArray, "HOMETASK_" + curdate_input.value + "_" + tema.value + ".txt", {type: "text/plain"});
                                formData.append('action', 'create');
                                formData.append('env', 'prod');
                                formData.append('token', keyToken);
                                formData.append('file', file);


                                fetch('https://mystatfiles.itstep.org/index.php', {
                                    "headers": {
                                        "accept": "application/json, text/plain, */*",
                                        "accept-language": "en-UA,en;q=0.9,ru-AU;q=0.8,ru;q=0.7,en-US;q=0.6",
                                        "cache-control": "no-cache",
                                        "pragma": "no-cache",
                                        "sec-fetch-dest": "empty",
                                        "sec-fetch-mode": "cors",
                                        "sec-fetch-site": "same-site"
                                    },
                                    method: 'POST',
                                    body: formData,
                                    //"credentials": 'same-origin'

                                })
                                    .then((response) => response.json())
                                    .then((result) => {
                                        console.log(localStorage);

                                        let myParams = {
                                            filename: result.name,
                                            id_spec: JSON.parse(localStorage["app.cur_spec_pr"]).id_spec,
                                            //lenta_para: parseInt(JSON.parse(localStorage["app.cur_lenta_pr"])),
                                            id_group: parseInt(localStorage["app.cur_group_pr"].replace(/["']/g, ""))
                                        };

                                        return myParams;

                                    })
                                    .catch((error) => {
                                        console.error('Error:', error);
                                    })


                                    .then((myParams) => {

                                        // плюс две недели в миллисеундах
                                        var curdate = curdate_input.value;

                                        var newdate = new Date();
                                        newdate.setDate(YyyyMmDd2Date(curdate).getDate() + 14);
                                        newdate = formatDate(newdate);
                                        console.log("даты ДЗ: ", curdate, newdate);

                                        console.log(myParams);
                                        // форма аплоуда ДОМАШКИ
                                        let formData = new FormData();
                                        //formData.append('recommended_cover_material_id', 159691);
                                        formData.append('descr', myTask.value);
                                        formData.append('date', curdate_input.value);
                                        // без этого поля не работает - берем из дропдауна выше
                                        //formData.append('lenta', myParams.lenta_para);
                                        formData.append('lenta', lenta.options[lenta.selectedIndex].value);
                                        formData.append('group', myParams.id_group);
                                        formData.append('spec', myParams.id_spec);
                                        formData.append('dz_theme', tema.value);
                                        formData.append('deadline', newdate);
                                        formData.append('type', 0);
                                        formData.append('filename', myParams.filename);


                                        return fetch("https://logbook.itstep.org/presents/new-homework", {
                                            "headers": {
                                                "accept": "application/json, text/plain, */*",
                                                "accept-language": "en-UA,en;q=0.9,ru-AU;q=0.8,ru;q=0.7,en-US;q=0.6",
                                                "cache-control": "no-cache",
                                                "pragma": "no-cache",
                                                "sec-fetch-dest": "empty",
                                                "sec-fetch-mode": "cors",
                                                "sec-fetch-site": "same-site"
                                            },
                                            method: 'POST',
                                            body: formData,
                                            //"credentials": 'same-origin'
                                        });


                                    }).then((response) => response.json())
                                    .then((result) => {
                                        console.log(result);
                                        alert(JSON.stringify(result));

                                    })

                                ;

                            });


                    });
                    var modal = document.getElementById("myModal");
                    var span = document.getElementsByClassName("myclose")[0];
                    span.onclick = function () {
                        localStorage.clear();
                        modal.remove();
                    };
                });


        } // основное мс\ясо
    }
);


function load(url, json, callback) {
    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.response);
        }
    }
    xhr.open('POST', url, true);
    xhr.setRequestHeader("content-type", "application/json;charset=UTF-8");
    console.log(json.length);
    xhr.setRequestHeader("authority", 'logbook.itstep.org');
    xhr.setRequestHeader("user-agent", 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36');
    xhr.setRequestHeader("origin", 'https://logbook.itstep.org');
    xhr.setRequestHeader("sec-fetch-site", 'same-origin');
    xhr.setRequestHeader("sec-fetch-mode", 'cors');
    xhr.setRequestHeader("sec-fetch-dest", 'empty');
    xhr.setRequestHeader("content-length", json.length);
    xhr.setRequestHeader("accept", "application/json, text/plain, */*");
    xhr.send(json);
}


function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join('-');
}

function YyyyMmDd2Date(dateStr) {
    var parts = dateStr.split("-")
    return new Date(parts[0], parts[1] - 1, parts[2])
}

// выбираем новую группу и предмет произвольно - пишем в локал сторидж
// выбираем новую группу и предмет произвольно - пишем в локал сторидж
// выбираем новую группу и предмет произвольно - пишем в локал сторидж
function changeGroup() {


}

//tema light dan dark mode
let lightTheme = "styles/light.css";
let darkTheme = "styles/dark.css";

document.addEventListener("keydown", keyboardInputHandler);

//fungsi input keyboard
function keyboardInputHandler(e) {
  let res = document.getElementById("result");

  //input nomor kalkulator
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  //operadi hitung
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  //desimal
  if (e.key === ".") {
    res.value += ".";
  }

  //enter untuk hasil
  if (e.key === "Enter") {
    res.value = eval(result.value || null);
  }

  //basckspace untuk menghapus
  if (e.key === "Backspace") {
    let resultInput = res.value;

    //menghapus elemen terakhir
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}

// clear layar saat memencet C
function clearScreen() {
  document.getElementById("result").value = "";
}
// Menampilkan nilai
function liveScreen(value) {
  let res = document.getElementById("result");
  if (!res.value) {
    res.value = "";
  }
  res.value += value;
}
// Mengganti dark dan light mode.
function changeTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") === lightTheme) {
    theme.href = darkTheme;
    darkMode.innerHTML = "Light Mode 🌞";
    user.innerHTML = "Arsy";
  } else {
    theme.href = lightTheme;
    darkMode.innerHTML = "Dark Mode 🌙";
    user.innerHTML = "Was Here";
  }
}

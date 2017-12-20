//-----------------------------------------------Curso Java--------------------------------------------------------------------
  // When the user clicks the button, open the modal
  btnJava.onclick = function() {
      JavaModal.style.display = "block";
      var estadoBoton = localStorage.getItem('btnAñadirCursoJava');
      if (estadoBoton != null) {
        var btn = document.getElementById('btnAñadirCursoJava');
        btn.disabled = true;
        btn.style.opacity = 0.5;
      }
  }

  // When the user clicks on <span> (x), close the modal
  spanJava.onclick = function() {
    JavaModal.style.display = "none";
  }

//-----------------------------------------------Curso Pyhton--------------------------------------------------------------------
// When the user clicks the button, open the modal
btnPython.onclick = function() {
    PythonModal.style.display = "block";
    var estadoBoton = localStorage.getItem('btnAñadirCursoPython');
    if (estadoBoton != null) {
      var btn = document.getElementById('btnAñadirCursoPython');
      btn.disabled = true;
      btn.style.opacity = 0.5;
    }
}

// When the user clicks on <span> (x), close the modal
spanPython.onclick = function() {
    PythonModal.style.display = "none";
}

//-----------------------------------------------Curso Xamarin--------------------------------------------------------------------
// When the user clicks the button, open the modal
btnXamarin.onclick = function() {
    XamarinModal.style.display = "block";

    var estadoBoton = localStorage.getItem('btnAñadirCursoXamarin');
    if (estadoBoton != null) {
      var btn = document.getElementById('btnAñadirCursoXamarin');
      btn.disabled = true;
      btn.style.opacity = 0.5;
    }
}

// When the user clicks on <span> (x), close the modal
spanXamarin.onclick = function() {
    XamarinModal.style.display = "none";
}

//-----------------------------------------------Curso Oracle DBA--------------------------------------------------------------------
// When the user clicks the button, open the modal
btnOracleDBA.onclick = function() {
    OracleDBAModal.style.display = "block";

    var estadoBoton = localStorage.getItem('btnAñadirCursoOracleDBA');
    if (estadoBoton != null) {
      var btn = document.getElementById('btnAñadirCursoOracleDBA');
      btn.disabled = true;
      btn.style.opacity = 0.5;
    }
}

// When the user clicks on <span> (x), close the modal
spanOracleDBA.onclick = function() {
    OracleDBAModal.style.display = "none";
}

//--------------------------------------------------------------------------------------------------------------------------------------
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == PythonModal) {
        PythonModal.style.display = "none";
    }
    if (event.target == JavaModal) {
        JavaModal.style.display = "none";
    }
    if (event.target == XamarinModal) {
        XamarinModal.style.display = "none";
    }
    if (event.target == OracleDBAModal) {
        OracleDBAModal.style.display = "none";
    }
}

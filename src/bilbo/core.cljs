(ns bilbo.core
  (:require [reagent.core :as reagent :refer [atom]]))

;; define your app data so that it doesn't get over-written on reload

(def app-state (atom {:text "Goodbye world!"
                      :notes [{:id 1 :creation-ts "Sun 31/05/20" :text "This is note 1"}
                              {:id 2 :creation-ts "Sat 30/05/20" :text "This is note 2"}]}))

(defn note-component [content]
  [:div.form-group
   [:label (content :creation-ts)]
   [:textarea.form-control {:value (content :text)}]])

(defn container []
  [:div.container
   [:h1 (:text @app-state)]
   [:h4 "Edit this and see it change!"]
   (for [note (@app-state :notes)]
        [note-component note ])
   ])

(defn start []
  (reagent/render-component [container]
                            (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))

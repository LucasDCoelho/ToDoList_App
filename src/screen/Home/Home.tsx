import { useState } from "react";
import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import { styles } from "./styles"
import { Feather } from "@expo/vector-icons"

export function Home() {
  const [ newTask, setNewTask ] = useState("")
  const [ arrayNewTasks, setArrayNewTasks ] = useState<string[]>([])
  const [ activeSelectedCardButton, setActiveSelectedCardButton ] = useState<boolean[]>([false])
  const [ createdCounter, setCreatedCounter ] = useState(0)
  const [ sucessefulyCounter, setSucessefulyCounter ] = useState(0)


  function handleCreateNewTask(){
    if(newTask){
      setArrayNewTasks(prevState => [...prevState, newTask])
      setNewTask("")
      setCreatedCounter(prevState => prevState + 1)
    }
  }

  function moveToLastPosition(index: number) {
    setArrayNewTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      const selectedTask = updatedTasks.splice(index, 1); // Remove o item selecionado
      return [...updatedTasks, ...selectedTask]; // Adiciona o item no final do array
    });
  
    setActiveSelectedCardButton(prevState => {
      const updatedButtons = [...prevState];
      const selectedButton = updatedButtons.splice(index, 1);
      return [...updatedButtons, ...selectedButton];
    });
  }

  function handleSelectedCardButton(index: number){

    if(!activeSelectedCardButton[index]){
      setSucessefulyCounter(prevState => prevState + 1)
    } else {
      setSucessefulyCounter(prevState => prevState - 1)
    }

    moveToLastPosition(index)
    setActiveSelectedCardButton(prevState => {
      const updatedPressable = [...prevState]
      updatedPressable[index] = !updatedPressable[index]
      return updatedPressable
    })
  }

  function handleDeleteFromSelectedCard(index: number){
    setArrayNewTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });

    setSucessefulyCounter(prevState => prevState - 1)
  
    setActiveSelectedCardButton(prevState => {
      const updatedButtons = [...prevState];
      updatedButtons.splice(index, 1);
      return updatedButtons;
    });
  }

  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.textLogo}>todo</Text>
      </View>

      <View style={styles.containerInputList}>
        <View style={styles.containerInput}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            style={styles.input}
            placeholderTextColor={"#808080"}
            onChangeText={text => setNewTask(text)}
            value={newTask}
          />

          <Pressable style={styles.buttonAdd} onPress={handleCreateNewTask}>
            <Text style={{ fontSize: 30, color: "#FFF" }}>+</Text>
          </Pressable>
        </View>


        <View style={styles.containerLabelList}>
          <View style={styles.itemLabelList}>
            <Text style={styles.LabelListText}>Criadas</Text>
            <Text style={styles.LabelListCounter}>{createdCounter}</Text>
          </View>
          <View style={styles.itemLabelList}>
            <Text style={styles.LabelListTextPurple}>Concluídas</Text>
            <Text style={styles.LabelListCounter}>{sucessefulyCounter}</Text>
          </View>
        </View>


        <FlatList
          data={arrayNewTasks}
          keyExtractor={item => item}
          renderItem={({item, index}) => (
            <View style={{
               width: "100%", 
               height: 54, 
               backgroundColor: "#333333", 
               marginTop: 20,
               borderRadius: 8,
               flexDirection: "row",
               alignItems: "center",
               justifyContent: "space-between",
               paddingLeft: 20,
               overflow: "hidden",
               
              }}>
              <Pressable
                style={{ 
                  borderRadius: 999,
                  backgroundColor: `${ activeSelectedCardButton[index] ? "#5e60ce" : "transparent"}`,
                  borderColor: `${ activeSelectedCardButton[index] ? "transparent" : "#1e6f9f" }`,
                  borderWidth: 2,
                  height: 25,
                  width: 25,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => handleSelectedCardButton(index)}
              >
                {
                  activeSelectedCardButton[index] && (
                    <Feather  name="check" color={"#f2f2f2"} size={15} style={{ fontWeight: "bold"  }}/>
                  )
                }
              </Pressable>
              <Text 
                style={{ 
                  color: "#F2f2f2", 
                  textDecorationLine: `${ activeSelectedCardButton[index] ? "line-through": "none" }`, opacity: activeSelectedCardButton[index] ? 0.3 : 0.8, 
                }}>
                  {item}
                </Text>
              <Pressable 
                onPress={() => handleDeleteFromSelectedCard(index)} 
                style={{ 
                  backgroundColor: `${activeSelectedCardButton[index] ? "#E25858" : "transparent"}`, height: "100%", 
                  width: 45, 
                  alignItems: "center", 
                  justifyContent: "center"
                }}>
                  <Feather 
                    name="trash" 
                    color={`${ activeSelectedCardButton[index] ? "#f2f2f2" : "transparent" }`} 
                    size={20} 
                  />
              </Pressable>
            </View>

          )}

          ListEmptyComponent={() => (
            <View style={{ alignItems: "center", justifyContent: "flex-start", marginTop: 54 }}>
              <Text style={{ color: "#808080", fontWeight: "bold" }}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={{ color: "#808080" }}>
                Crie tarefas e organize itens a fazer
              </Text>
            </View>

          )}
        />
      </View>
    </View>
  )
}




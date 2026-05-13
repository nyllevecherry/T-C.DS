import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ActivityIndicator, SafeAreaView, Platform, Alert } from 'react-native';

const IMAGENS_LOCAIS = {
'bolo_de_cenoura.jpg': require('./img/bolo_de_cenoura.jpg'),
'bolo_de_suspiro_com_morango.jpg': require('./img/bolo_de_suspiro_com_morango.jpg'),
'bolo_de_ninho.jpg': require('./img/bolo_de_ninho.jpg'),
'bolo_de_maracuja.jpg': require('./img/bolo_de_maracuja.jpg'),
'bolo_red_velvet.jpg' : require('./img/bolo_red_velvet.jpg'),
'bolo_de_chocolate.jpg' : require('./img/bolo_de_chocolate.jpg')
};

const RECEITAS_INICIAIS = [

{
id: "1",
nome: 'bolo de cenoura',
img: 'bolo_de_cenoura.jpg',
ingredientes:{
"Massa":[
"3 cenouras médias (cerca de 360 gramas)",
"4 Ovos",
"1 xícara de chá de óleo de milho (240 ml)",
"1 e 1/2 xícara de chá de açúcar (300 gramas)",
"2 xícaras de chá de farinha de trigo (280 gramas)",
"1 colher de sopa de fermento químico em pó (fermento para bolo) (14 gramas)",
"1 pitada de sal (1/4 de colher de chá)",
"Manteiga e farinha de trigo para untar"
],
"Cobertura":[
"1 caixa de leite condensado (395 gramas)",
"1 colher de sopa de manteiga sem sal (14 gramas)",
"4 colheres de sopa de chocolate em pó (ou 7 colheres de sopa de achocolatado)",
"1/2 caixinha de creme de leite (100 gramas)"
]
},
utensilios: ["Fouet","Tigela grande","Xícara","Colher de sopa","Forma","Panela","Ralador","Forno"],
passos:{
"Massa":[
"1° Higienize, descasque e corte as cenouras em rodelas. Preaqueça o forno a 180 ºC.",
"2° Peneire a farinha, adicione o sal e o fermento. Misture bem.",
"3° No liquidificador, bata cenoura, óleo, ovos e açúcar por 5 minutos.",
"4° Misture com os ingredientes secos delicadamente.",
"5° Despeje na forma untada e asse por 45 a 50 minutos."
],
"Cobertura":[
"1° Prepare a calda enquanto o bolo esfria.",
"2° Misture leite condensado, manteiga e chocolate.",
"3° Cozinhe até ponto de brigadeiro e adicione creme de leite.",
"4° Despeje sobre o bolo morno."
]
},
videoUrl: 'https://raw.githubusercontent.com/nyllevecherry/T-C.DS/main/videos/chocolate.mp4?raw=true'
},

{
id: "2",
nome: 'bolo de suspiro com morango',
img: 'bolo_de_suspiro_com_morango.jpg',
ingredientes:{
"Massa":[
"4 ovos (gemas e claras separadas)",
"2 xícaras de chá de açúcar (300 gramas)",
"2 xícaras de chá de farinha de trigo (250 gramas)",
"200 ml de leite",
"1/2 colher de sopa de essência de baunilha",
"1 colher de sopa de fermento químico"
],
"Recheio":[
"500 ml de chantilly",
"500 gramas de morangos",
"120 gramas de suspiros",
"1/4 xícara de leite condensado",
"1/4 xícara de água"
]
},
utensilios: ["Fouet","Tigela","Forma","Forno"],
passos:{
"Massa":[
"1° Bata as claras em neve.",
"2° Adicione as gemas.",
"3° Acrescente açúcar.",
"4° Misture leite e farinha.",
"5° Finalize com fermento.",
"6° Asse por 30 a 40 minutos."
],
"Recheio":[
"1° Bata o chantilly.",
"2° Corte o bolo em discos.",
"3° Regue com leite condensado e água.",
"4° Adicione chantilly, morango e suspiro.",
"5° Cubra e finalize."
]
},
videoUrl: 'https://raw.githubusercontent.com/nyllevecherry/T-C.DS/main/videos/fuba.mp4?raw=true'
},

{
id: "3",
nome: 'bolo de ninho',
img: 'bolo_de_ninho.jpg',
ingredientes:{
"Massa":[
"3 ovos",
"1 xícara de açúcar",
"1 xícara de leite integral",
"1/2 xícara de óleo",
"1/2 xícara de leite Ninho",
"2 xícaras de farinha de trigo",
"1 colher de sopa de fermento"
],
"Recheio":[
"1 caixa de leite condensado",
"2 caixas de creme de leite",
"100 gramas de leite em pó"
]
},
utensilios: ["Tigela","Xícara","Colher","Panela","Forma"],
passos:{
"Massa":[
"1° Prepare os ingredientes e preaqueça o forno.",
"2° Bata ovos e açúcar.",
"3° Adicione líquidos e farinha.",
"4° Acrescente fermento.",
"5° Asse por 35 a 45 minutos."
],
"Cobertura":[
"1° Cozinhe leite condensado e creme de leite.",
"2° Adicione leite Ninho.",
"3° Cubra o bolo."
]
},
videoUrl: 'https://raw.githubusercontent.com/nyllevecherry/T-C.DS/main/videos/cenoura.mp4?raw=true'
},

{
id: "4",
nome: 'bolo de maracujá',
img: 'bolo_de_maracuja.jpg',
ingredientes:{
"Massa":[
"3 ovos",
"1 xícara de suco de maracujá",
"1 xícara de óleo",
"2 xícaras de açúcar",
"Farinha de trigo",
"Fermento"
],
"Cobertura":[
"Creme de leite",
"Leite condensado",
"3 polpas de maracujá"
]
},
utensilios: ["Tigela","Liquidificador","Forma","Forno"],
passos:{
"Massa":[
"1° Bata ovos, suco, óleo e açúcar.",
"2° Misture farinha.",
"3° Adicione fermento.",
"4° Asse por 45 minutos."
],
"Cobertura":[
"1° Bata todos os ingredientes.",
"2° Leve à geladeira.",
"3° Cubra o bolo frio."
]
},
videoUrl: 'https://raw.githubusercontent.com/nyllevecherry/T-C.DS/main/videos/laranja.mp4?raw=true'
}

];

export default function HomeScreen({ navigation }) {
const [receitas, setReceitas] = useState(RECEITAS_INICIAIS);
const [carregando, setCarregando] = useState(false);

const sincronizarReceitas = async () => {
setCarregando(true);
try {
const response = await fetch('https://raw.githubusercontent.com/nyllevecherry/T-C.DS/refs/heads/main/receitas.json');
const receitasDoServidor = await response.json();
const novas = receitasDoServidor.filter(resServidor => !receitas.some(resLocal => resLocal.id === resServidor.id));

if (novas.length === 0) {
alert("Você já possui todas as receitas disponíveis!");
} else {
setReceitas(prev => [...prev, ...novas]);
alert("Novas receitas adicionadas com sucesso!");
}
} catch (error) {
alert("Erro ao conectar ao servidor.");
} finally {
setCarregando(false);
}
};

const deletarReceita = (id) => {
const confirmar = Platform.OS === 'web' ? window.confirm("Deseja remover?") : true;
if (confirmar) {
setReceitas(prev => prev.filter(r => r.id !== id));
}
};

return (
<SafeAreaView style={styles.safeArea}>
<ScrollView
style={styles.scrollView}
contentContainerStyle={styles.scrollContent}
showsVerticalScrollIndicator={true}
>
<Text style={styles.headerTitle}>Minhas Receitas 🍰</Text>

<TouchableOpacity style={styles.btnSync} onPress={sincronizarReceitas} disabled={carregando}>
{carregando ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnText}>Baixar Novidades ☁️</Text>}
</TouchableOpacity>

<View style={styles.vitrine}>
{receitas.map((receita) => (
<View key={receita.id} style={styles.cardContainer}>
<TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Ingredientes', { receitaCompleta: receita })}>
<Image source={IMAGENS_LOCAIS[receita.img] || { uri: receita.imgUrl }} style={styles.image} />
<View style={styles.cardOverlay}>
<Text style={styles.recipeTitle}>{receita.nome}</Text>
</View>
</TouchableOpacity>
{!["1", "2", "3", "4"].includes(receita.id) && (
<TouchableOpacity style={styles.deleteBtn} onPress={() => deletarReceita(receita.id)}>
<Text style={styles.deleteText}>✕</Text>
</TouchableOpacity>
)}
</View>
))}
</View>
</ScrollView>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
safeArea: {
flex: 1,
backgroundColor: '#fff',
// No Web, removemos a altura fixa do SafeArea e deixamos o corpo da página crescer
height: Platform.OS === 'web' ? 'auto' : '100%',
minHeight: Platform.OS === 'web' ? '100vh' : '100%',
},
scrollView: {
flex: 1,
// Força o navegador a mostrar a barra de rolagem se o conteúdo transbordar
overflow: Platform.OS === 'web' ? 'visible' : 'scroll',
},
scrollContent: {
flexGrow: 1,
paddingBottom: 100,
// Garante que o conteúdo não fique preso
alignItems: 'stretch',
},
headerTitle: { fontSize: 26, fontWeight: 'bold', padding: 20 },
btnSync: { backgroundColor: '#8B4513', margin: 20, padding: 15, borderRadius: 12, alignItems: 'center' },
btnText: { color: '#fff', fontWeight: 'bold' },
vitrine: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-around',
padding: 10
},
cardContainer: { width: '46%', marginBottom: 20, position: 'relative' },
card: { width: '100%', height: 160, borderRadius: 15, overflow: 'hidden', backgroundColor: '#eee' },
image: { width: '100%', height: '100%', resizeMode: 'cover' },
cardOverlay: { position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'rgba(0,0,0,0.5)', padding: 8 },
recipeTitle: { color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 12 },
deleteBtn: { position: 'absolute', top: -10, right: -10, backgroundColor: '#ff4444', width: 28, height: 28, borderRadius: 14, justifyContent: 'center', alignItems: 'center', zIndex: 99 },
deleteText: { color: '#fff', fontWeight: 'bold' }
});

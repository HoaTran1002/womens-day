export interface Message {
  id: number;
  text: string;
  author?: string;
}

export const messages: Message[] = [
  {
    id: 1,
    text: "Chúc bạn luôn hạnh phúc và tỏa sáng như ánh mặt trời mỗi sớm mai.",
    author: "Từ trái tim",
  },
  {
    id: 2,
    text: "Cảm ơn bạn vì đã làm thế giới này dịu dàng hơn bằng nụ cười của mình.",
    author: "Với yêu thương",
  },
  {
    id: 3,
    text: "Phụ nữ là những đóa hoa đẹp nhất mà cuộc đời ban tặng — mạnh mẽ, rực rỡ và không bao giờ tàn phai.",
    author: "Lời tri ân",
  },
  {
    id: 4,
    text: "Chúc bạn luôn yêu bản thân mình nhiều hơn mỗi ngày, vì bạn xứng đáng được hưởng tất cả điều tốt đẹp nhất.",
    author: "Gửi đến bạn",
  },
  {
    id: 5,
    text: "Bạn không chỉ là người phụ nữ mạnh mẽ — bạn còn là nguồn cảm hứng vô tận cho những người xung quanh.",
    author: "Ngưỡng mộ",
  },
  {
    id: 6,
    text: "Ngày hôm nay là ngày của bạn — hãy để thế giới thấy vẻ đẹp phi thường mà bạn mang lại.",
    author: "Chúc mừng 8/3",
  },
  {
    id: 7,
    text: "Mỗi bước chân bạn đi đều để lại dấu ấn yêu thương. Cảm ơn bạn vì điều đó.",
    author: "Trân trọng",
  },
  {
    id: 8,
    text: "Chúc bạn một ngày tràn đầy những điều ngọt ngào, ấm áp và đáng nhớ nhất.",
    author: "Ngày đặc biệt",
  },
  {
    id: 9,
    text: "Vẻ đẹp của bạn không chỉ nằm ở ngoại hình mà còn ở tâm hồn nhân hậu và trái tim rộng lượng.",
    author: "Ngưỡng mộ",
  },
  {
    id: 10,
    text: "Hãy luôn tin vào chính mình, vì bạn có đủ sức mạnh để chinh phục bất kỳ điều gì bạn mơ ước.",
    author: "Niềm tin",
  },
  {
    id: 11,
    text: "Một bông hoa dù ở trong bóng tối vẫn tỏa hương — bạn cũng thế, luôn rực rỡ dù trong hoàn cảnh nào.",
    author: "Nguồn sáng",
  },
  {
    id: 12,
    text: "Chúc bạn luôn được bao quanh bởi những điều yêu thương và những người trân trọng bạn thật lòng.",
    author: "Chân thành",
  },
  {
    id: 13,
    text: "Cảm ơn bạn đã là chính mình — độc đáo, chân thật và tuyệt vời theo cách riêng của bạn.",
    author: "Yêu thương",
  },
  {
    id: 14,
    text: "Bạn xứng đáng với tất cả những yêu thương, hạnh phúc và thành công mà cuộc sống mang lại.",
    author: "Gửi đến bạn",
  },
  {
    id: 15,
    text: "Mỗi phụ nữ đều là một tuyệt tác của tạo hóa. Hãy tự hào về những gì bạn là và những gì bạn làm được.",
    author: "Kiêu hãnh",
  },
  {
    id: 16,
    text: "Chúc bạn luôn tìm thấy niềm vui trong những điều nhỏ bé, vì đó chính là bí mật của hạnh phúc.",
    author: "Bình yên",
  },
  {
    id: 17,
    text: "Bạn không cần phải hoàn hảo để được yêu thương. Bạn chỉ cần là chính mình — điều đó đã đủ rồi.",
    author: "Chấp nhận",
  },
  {
    id: 18,
    text: "Ngày 8/3 không chỉ là ngày của bạn mà là lời nhắc nhở để mọi người thấy bạn quan trọng đến nhường nào.",
    author: "Tri ân",
  },
  {
    id: 19,
    text: "Chúc bạn luôn có đủ dũng cảm để theo đuổi ước mơ, đủ yêu thương để tha thứ, và đủ trí tuệ để tiến về phía trước.",
    author: "Trưởng thành",
  },
  {
    id: 20,
    text: "Bạn là ánh sáng của những ai may mắn có bạn trong cuộc đời. Cảm ơn bạn vì luôn chiếu sáng thế giới này.",
    author: "Biết ơn",
  },
];

export const getRandomMessage = (excludeId?: number): Message => {
  const available = excludeId
    ? messages.filter((m) => m.id !== excludeId)
    : messages;
  return available[Math.floor(Math.random() * available.length)];
};
